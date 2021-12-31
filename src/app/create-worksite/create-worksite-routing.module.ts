import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateWorksite } from './create-worksite';

const routes: Routes = [
    {
    path: '',
    component: CreateWorksite,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateWorksiteRoutingModule {}
