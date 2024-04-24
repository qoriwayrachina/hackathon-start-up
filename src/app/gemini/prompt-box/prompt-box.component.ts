import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core';
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
  prompt = model.required<string>();
  loading = input.required<boolean>();

  viewModel = computed(() => ({
    isLoading: this.loading(),
    buttonText: this.loading() ? 'Thinking' : 'Ask me anything',
  }));

  askMe = output();

  get vm() {
    return this.viewModel();
  }
}
