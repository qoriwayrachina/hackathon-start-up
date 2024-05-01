import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

interface TopicTags {
  content: string
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
  public topicTag: string = "";

  constructor(
    private http:HttpClient,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

  }

  getTopicTag() {
    const url = "http://localhost:5000/topic-tag";

    this.http.post<TopicTags>(url, {}).subscribe((response => {
      this.topicTag = response.content;
      this.cd.markForCheck();
    }));

  }
}
