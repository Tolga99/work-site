import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tabs } from './tabs';

const routes: Routes = [
  {
    path: '',
    component: Tabs,
    children: [
      //CHANTIER
      {
        path: 'tb-home',
        loadChildren: () => import('../tb-home/tb-home.module').then(m => m.TabHomeModule)
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
      {
        path: 'payment',
        loadChildren: () => import('../payment/payment.module').then(m => m.PaymentModule)
      },
      //CALENDRIER
      {
        path: 'tb-calendar',
        loadChildren: () => import('../tb-calendar/tb-calendar.module').then(m => m.TabCalendarModule)
      },
      //CONTACTS
      {
        path: 'tb-contacts',
        loadChildren: () => import('../tb-contacts/tb-contacts.module').then(m => m.TabContactsModule)
      },
      {
        path:'new-contact',
        loadChildren: () => import('../tb-contacts-client/tb-contacts-client.module').then(m => m.TabContactsClientModule)
      },
      //REGLAGES
      {
        path: 'tb-settings',
        loadChildren: () => import('../tb-settings/tb-settings.module').then(m => m.TabSettingsModule)
      },
      {
        path:'my-profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
      },
      //ARTICLES CATEGORIES
      {
        path:'articles',
        loadChildren: () => import('../articles/articles.module').then(m => m.ArticlesModule)
      },
      {
        path: 'article-form',
        loadChildren: () => import('../article-form/article-form.module').then( m => m.ArticleFormModule)
      },
      {
        path: 'category-form',
        loadChildren: () => import('../category-form/category-form.module').then( m => m.CategoryFormModule)
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
