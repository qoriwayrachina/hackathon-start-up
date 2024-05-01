import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-web-usage',
  standalone: true,
  imports: [],
  templateUrl: "./web-usage.component.html",
  styleUrls: ["./web-usage.component.scss"] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebUsageComponent {
  @Input()
  webUsage: any;
}
