import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleForm } from './article-form';

const routes: Routes = [
  {
    path: '',
    component: ArticleForm
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleFormRoutingModule {}
