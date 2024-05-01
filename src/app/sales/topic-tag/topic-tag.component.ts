import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic-tag',
  standalone: true,
  imports: [],
  template: `
    <p>
      topic-tag works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicTagComponent {
  @Input()
  topicTags: any;
}
