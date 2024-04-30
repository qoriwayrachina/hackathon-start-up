import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GridItemComponent } from '../grid-item/grid-item.component';

@Component({
  selector: 'app-sales-view',
  standalone: true,
  imports: [GridItemComponent],
  templateUrl: "./sales-view.component.html",
  styleUrl: "./sales-view.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesViewComponent {
}
