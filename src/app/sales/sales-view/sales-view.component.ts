import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdvisorDemographicsComponent } from '../advisor-demographics/advisor-demographics.component';
import { NextBestActionComponent } from '../next-best-action/next-best-action.component';
import { SummaryComponent } from '../summary/summary.component';
import { TopicTagComponent } from '../topic-tag/topic-tag.component';
import { WebUsageComponent } from '../web-usage/web-usage.component';

@Component({
  selector: 'app-sales-view',
  standalone: true,
  imports: [
    AdvisorDemographicsComponent,
    NextBestActionComponent,
    SummaryComponent,
    TopicTagComponent,
    WebUsageComponent
  ],
  templateUrl: "./sales-view.component.html",
  styleUrl: "./sales-view.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesViewComponent {
}
