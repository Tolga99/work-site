import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryForm } from './category-form';

const routes: Routes = [
  {
    path: '',
    component: CategoryForm
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryFormRoutingModule {}
