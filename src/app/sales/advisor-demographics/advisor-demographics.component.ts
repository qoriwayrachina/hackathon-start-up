import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-advisor-demographics',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './advisor-demographics.component.html',
  styleUrls: ['./advisor-demographics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvisorDemographicsComponent {
  @Input()
  advisorDemographics: any;
}
