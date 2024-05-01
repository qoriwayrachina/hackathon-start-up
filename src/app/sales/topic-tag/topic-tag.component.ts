import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

interface TagSummary {
  "tag": string,
  "articles": string[]

}
interface TagSummaries {
  content: TagSummary[]
}
@Component({
  selector: 'app-topic-tag',
  standalone: true,
  imports: [],
  templateUrl: './topic-tag.component.html',
  styleUrls: ['./topic-tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicTagComponent implements OnInit {
  public tagSummaries: TagSummary[] = [];

  constructor(
    private http:HttpClient,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const url = "http://localhost:5000/topics_rollup";

    this.http.post<TagSummaries>(url, {}).subscribe((response => {
      this.tagSummaries = response.content.sort((ts1, ts2) => ts2.articles.length - ts1.articles.length);
      this.cd.markForCheck();
    }));
  }

}
