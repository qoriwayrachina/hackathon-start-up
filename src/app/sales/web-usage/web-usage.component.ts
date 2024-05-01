import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-web-usage',
  standalone: true,
  imports: [],
  template: `
    <p>
      web-usage works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebUsageComponent {
  @Input()
  webUsage: any;
}
