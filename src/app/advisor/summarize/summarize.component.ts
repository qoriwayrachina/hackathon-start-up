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
    @if(isLoading) {
      <br><br>
      <p>Loading...</p>
    }
    @else {
      <br><br>
      <p>
      {{articleSummary}}
      </p>
    }    
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummarizeComponent implements OnInit {

  public articleSummary: string = "";
  public isLoading: boolean = false;
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    
  }

  onSummarize() {
    const url = "http://localhost:5000/summary";
    this.isLoading = true;

    this.http.post<SummaryResponse>(url, {}).subscribe(response => {
      this.isLoading = false;
      this.articleSummary = response.content;    
      this.cd.markForCheck();
    })
  }
  



}
