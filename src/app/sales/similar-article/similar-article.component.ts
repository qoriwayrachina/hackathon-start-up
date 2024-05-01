import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-similar-article',
  standalone: true,
  imports: [],
  templateUrl: './similar-article.component.html',
  styleUrls: ['./similar-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimilarArticleComponent {
  @Input()
  similarArticle: any;
}
