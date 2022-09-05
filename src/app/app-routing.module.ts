import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'worksite',
    loadChildren: () => import('./worksite/worksite.module').then(m => m.WorksiteModule)
  },
  {
    path: 'createworksite',
    loadChildren: () => import('./create-worksite/create-worksite.module').then(m => m.CreateWorksiteModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'hours',
    loadChildren: () => import('./hours/hours.module').then(m => m.HoursModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
  },
  // CALENDRIER
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  },
  {
    path:'new-contact',
    loadChildren: () => import('./tb-contacts-client/tb-contacts-client.module').then(m => m.TabContactsClientModule)
  },
  // REGLAGES
  {
    path: 'tb-settings',
    loadChildren: () => import('./tb-settings/tb-settings.module').then(m => m.TabSettingsModule)
  },
  {
    path:'my-profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path:'profile-info',
    loadChildren: () => import('./profile-info/profile-info.module').then(m => m.ProfileInfoModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsModule)
  },
  // ARTICLES CATEGORIES
  {
    path: 'article-form',
    loadChildren: () => import('./article-form/article-form.module').then( m => m.ArticleFormModule)
  },
  {
    path: 'category-form',
    loadChildren: () => import('./category-form/category-form.module').then( m => m.CategoryFormModule)
  },
  // { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  // { path: 'sign-in', component: SignInComponent },
  // { path: 'register-user', component: SignUpComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: 'verify-email-address', component: VerifyEmailComponent },

  // {
  //   path: '',
  //   redirectTo: '/tabs',
  //   pathMatch: 'full'
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
