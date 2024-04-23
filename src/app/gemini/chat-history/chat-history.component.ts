import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { HistoryItem } from '../interfaces/history-item.interface';
import { LineBreakPipe } from '../pipes/line-break.pipe';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-chat-history',
  standalone: true,
  imports: [MarkdownComponent, LineBreakPipe],
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatHistoryComponent {
  chatHistory = input.required<HistoryItem[]>();
  lineBreakPipe = new LineBreakPipe();
}
