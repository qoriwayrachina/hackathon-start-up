import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [],
  template: `
    <p>
      {{ recommendations }}
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendationsComponent implements OnInit{
  public recommendations: string = "";
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    const url = "http://localhost:5000/recommendations_article";
    const data = {
      key1: 'value1'
    };

    this.http.post(url, data).subscribe(response => {
      this.recommendations = JSON.stringify(response);
      this.cd.markForCheck();
    })
  }


}
