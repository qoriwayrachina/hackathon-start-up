import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-similar-article',
  standalone: true,
  imports: [],
  template: `
    <p>
      similar-article works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimilarArticleComponent {
  @Input()
  similarArticle: any;
}
