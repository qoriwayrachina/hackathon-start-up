import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic-tag',
  standalone: true,
  imports: [],
  templateUrl: './topic-tag.component.html',
  styleUrls: ['./topic-tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicTagComponent {
  @Input()
  topicTags: any;
}
