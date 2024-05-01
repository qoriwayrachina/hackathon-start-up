import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

interface Summaries {
  content: Summary[]
}
interface Summary {
  title: string;
  summary: string;
}

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent implements OnInit {
  public summaries: Summary[] = [];

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const url = "http://localhost:5000/summary_rollup";

    this.http.post<Summaries>(url, {}).subscribe((response => {
      this.summaries = response.content;
      this.cd.markForCheck();
    }));
  }
}
