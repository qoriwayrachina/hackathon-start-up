import { provideHttpClient } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';
import { AppRoutingModule } from './app.routes';
import { provideGeminiApi } from './gemini/gemini.provider';

export const appConfig = {
  providers: [
    provideHttpClient(),
    AppRoutingModule,
    provideGeminiApi(),
    provideMarkdown()
  ]
};
