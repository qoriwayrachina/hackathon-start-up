import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SummaryResponse {
  content: string
}
@Component({
  selector: 'app-summarize',
  standalone: true,
  imports: [],
  template: `
    <button (click)="onSummarize()">Summarize</button>
    <p>
      {{articleSummary}}
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummarizeComponent implements OnInit {

  public articleSummary: string = "";
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    
  }

  onSummarize() {
    const url = "http://localhost:5000/summary";

    this.http.post<SummaryResponse>(url, {}).subscribe(response => {
      this.articleSummary = response.content;    
      this.cd.markForCheck();
    })
  }
  



}
