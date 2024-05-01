import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Recommendation {
  title: string,
  url: string
}



interface Recommendations {
  content: Recommendation[]
}

interface TagSummary {
  
    "Econonmy": string[],
    "Federal Reserve": string[]
    

}
interface TagSummaries {
  content: TagSummary
}

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [],
  template: `
    <button (click)="onRecommend()">Recommend more</button>
  
    <ul>
      @for (rec of recommendations; track rec) {
        <li><a href="{{rec.url}}">{{rec.title}}</a></li>
      }
    </ul>
    
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendationsComponent implements OnInit{
  public recommendations: Recommendation[] = [];
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    
  }

  onRecommend() {
    const url = "http://localhost:5000/recommendations_article";   

    this.http.post<Recommendations>(url, {}).subscribe(response => {
      this.recommendations = response.content;
      this.cd.markForCheck();
    })
  }


}
