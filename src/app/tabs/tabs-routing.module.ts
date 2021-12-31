import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      //CHANTIER
      {
        path: 'tb-home',
        loadChildren: () => import('../tb-home/tb-home.module').then(m => m.TabHomePageModule)
      },
      {
        path: 'worksite',
        loadChildren: () => import('../worksite/worksite.module').then(m => m.WorksiteModule)
      },
      {
        path: 'createworksite',
        loadChildren: () => import('../create-worksite/create-worksite.module').then(m => m.CreateWorksiteModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('../invoice/invoice.module').then(m => m.InvoiceModule)
      },
      {
        path: 'hours',
        loadChildren: () => import('../hours/hours.module').then(m => m.HoursModule)
      },
      //CALENDRIER
      {
        path: 'tb-calendar',
        loadChildren: () => import('../tb-calendar/tb-calendar.module').then(m => m.TabCalendarModule)
      },
      //CONTACTS
      {
        path: 'tb-contacts',
        loadChildren: () => import('../tb-contacts/tb-contacts.module').then(m => m.TabContactsPageModule)
      },
      {
        path:'new-contact',
        loadChildren: () => import('../tb-contacts-client/tb-contacts-client.module').then(m => m.TabContactsClientPageModule)
      },
      //REGLAGES
      {
        path: 'tb-settings',
        loadChildren: () => import('../tb-settings/tb-settings.module').then(m => m.TabSettingsPageModule)
      },
      {
        path:'my-profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
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
export class TabsPageRoutingModule {}
