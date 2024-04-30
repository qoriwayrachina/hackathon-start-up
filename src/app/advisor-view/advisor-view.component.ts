import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-advisor-view',
  standalone: true,
  imports: [],
  template: `
    <div class="grid-container">
      <div class="article-grid-item">Article</div>
      <div class="summarize-grid-item">Summarize</div>
      <div class="recommend-grid-item">Recommended</div>
    </div> 
  `,
  styleUrl: "./advisor-view.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvisorViewComponent {

}
