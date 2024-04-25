import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal, viewChild } from '@angular/core';
import { outputToObservable } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Observable, filter, finalize, scan, startWith, switchMap, tap } from 'rxjs';
import { ChatHistoryComponent } from '../chat-history/chat-history.component';
import { HistoryItem } from '../interfaces/history-item.interface';
import { PromptBoxComponent } from '../prompt-box/prompt-box.component';
import { GeminiService } from '../services/gemini.service';

@Component({
  selector: 'app-generate-text',
  standalone: true,
  imports: [FormsModule, ChatHistoryComponent, PromptBoxComponent, AsyncPipe],
  templateUrl: './generate-text.component.html',
  styleUrls: ['./generate-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenerateTextComponent implements OnInit {
  promptBox = viewChild.required(PromptBoxComponent);

  geminiService = inject(GeminiService);
  prompt = signal('');
  loading = signal(false);

  chatHistory$!: Observable<HistoryItem[]>;

  ngOnInit(): void {
    this.chatHistory$ = outputToObservable(this.promptBox().askMe)
      .pipe(
        filter(() => this.prompt() !== ''),
        tap(() => this.loading.set(true)),
        switchMap(() =>
          this.geminiService.generateText(this.prompt()).pipe(finalize(() => this.loading.set(false)))
        ),
        scan((acc, response) => acc.concat({ prompt: this.prompt(), response }), [] as HistoryItem[]),
        startWith([] as HistoryItem[])
      );
  }
}
