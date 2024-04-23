import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prompt-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prompt-box.component.html',
  styleUrls: ['./prompt-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromptBoxComponent {
  promptValue = '';
  loading = input.required<boolean>();

  viewModel = computed(() => ({
    isLoading: this.loading(),
    buttonText: this.loading() ? 'Processing' : 'Ask me anything',
  }));

  get vm() {
    return this.viewModel();
  }

  clearPrompt() {
    this.promptValue = '';
  }

  askMe = output();
}
