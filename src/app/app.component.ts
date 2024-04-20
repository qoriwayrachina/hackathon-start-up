import { ChangeDetectionStrategy, Component } from '@angular/core';
import { setTitle } from './utils/title.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'GenAI Hackathon Demo';

  constructor() {
    setTitle();
  }
}
