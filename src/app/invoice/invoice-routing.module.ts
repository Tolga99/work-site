import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Invoice } from './invoice';

const routes: Routes = [
    {
    path: '',
    component: Invoice,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule {}
