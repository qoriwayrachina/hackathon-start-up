import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sales-view',
  standalone: true,
  imports: [],
  template: `
     <div class="grid-container">
      <div class="grid-item span-two-columns">Item 1</div>
      <div class="grid-item">Item 2</div>
      <div class="grid-item">Item 3</div>
      <div class="grid-item">Item 4</div>
      <div class="grid-item">Item 5</div>
    </div>
  `,
  styleUrl: "./sales-view.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesViewComponent {

}
