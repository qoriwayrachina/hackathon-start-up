import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateTextComponent } from './gemini/generate-text/generate-text.component';
import { GenerateTextMultimodalComponent } from './gemini/generate-text-multimodal/generate-text-multimodal.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GenerateTextComponent
  },
  {
    path: 'text-multimodal',
    component: GenerateTextMultimodalComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
