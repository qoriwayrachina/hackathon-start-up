import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  template: `
    <p>
      summary works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent {
  @Input()
  summary: any;
}
