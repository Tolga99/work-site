import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tabs } from './tabs';

const routes: Routes = [
  {
    path: '',
    component: Tabs,
    children: [
      // {
      //   path: 'login',
      //   loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      // },
      // CHANTIER
      {
        path: 'tb-home',
        loadChildren: () => import('../tb-home/tb-home.module').then(m => m.TabHomeModule)
      },
      {
        path:'articles',
        loadChildren: () => import('../articles/articles.module').then(m => m.ArticlesModule)
      },
      {
        path: 'tb-calendar',
        loadChildren: () => import('../tb-calendar/tb-calendar.module').then(m => m.TabCalendarModule)
      },
      // CONTACTS
      {
        path: 'tb-contacts',
        loadChildren: () => import('../tb-contacts/tb-contacts.module').then(m => m.TabContactsModule)
      },
      {
        path: '',
        redirectTo: 'tb-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tb-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsRoutingModule {}
