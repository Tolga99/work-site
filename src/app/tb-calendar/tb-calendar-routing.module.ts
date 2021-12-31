import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabCalendar } from './tb-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: TabCalendar,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabCalendarRoutingModule {}
