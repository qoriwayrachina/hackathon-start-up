import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-next-best-action',
  standalone: true,
  imports: [],
  templateUrl: './next-best-action.component.html',
  styleUrls: ['./next-best-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextBestActionComponent {
  @Input()
  similarArticle: any;
}
