import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { SummarizeComponent } from '../summarize/summarize.component';
import { RecommendationsComponent } from '../recommendations/recommendations.component';

@Component({
  selector: 'app-advisor-view',
  standalone: true,
  imports: [ArticleComponent, SummarizeComponent, RecommendationsComponent],
  templateUrl: './advisor-view.component.html',
  styleUrl: "./advisor-view.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvisorViewComponent {

}
