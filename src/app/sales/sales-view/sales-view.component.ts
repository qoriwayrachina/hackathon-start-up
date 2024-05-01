import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdvisorDemographicsComponent } from '../advisor-demographics/advisor-demographics.component';
import { SimilarArticleComponent } from '../similar-article/similar-article.component';
import { SummaryComponent } from '../summary/summary.component';
import { TopicTagComponent } from '../topic-tag/topic-tag.component';
import { WebUsageComponent } from '../web-usage/web-usage.component';

@Component({
  selector: 'app-sales-view',
  standalone: true,
  imports: [
    AdvisorDemographicsComponent,
    SimilarArticleComponent,
    SummaryComponent,
    TopicTagComponent,
    WebUsageComponent
  ],
  templateUrl: "./sales-view.component.html",
  styleUrl: "./sales-view.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesViewComponent {
}
