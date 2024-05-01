import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

interface Summary {
  content: string
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
  public summaries: string[] = [];

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  getSummaries() {
    const url = "http://localhost:5000/summary_rollup";

    this.http.post<Summary>(url, {}).subscribe((response => {
      this.summaries = [response.content];
      this.cd.markForCheck();
    }));
  }
}
