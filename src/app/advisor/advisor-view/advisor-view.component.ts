import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { SummarizeComponent } from '../summarize/summarize.component';
import { RecommendationsComponent } from '../recommendations/recommendations.component';

@Component({
  selector: 'app-advisor-view',
  standalone: true,
  imports: [ArticleComponent, SummarizeComponent, RecommendationsComponent],
  template: `
    <div class="grid-container">
      <div class="article-grid-item"><app-article></app-article></div>
      <div class="summarize-grid-item"><app-summarize></app-summarize></div>
      <div class="recommend-grid-item"><app-recommendations></app-recommendations></div>
    </div> 
  `,
  styleUrl: "./advisor-view.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvisorViewComponent {

}
