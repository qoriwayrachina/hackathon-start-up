import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-summarize',
  standalone: true,
  imports: [],
  template: `
    <button>Summarize</button>
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
    const url = "http://localhost:5000/summary";
    const data = {
      key1: 'value1'
    };

    this.http.post(url, data).subscribe(response => {
      this.articleSummary = JSON.stringify(response);
      //this.articleSummary = "hello";
      this.cd.markForCheck();
    })

    this.articleSummary = "goodbye";
  }
  



}
