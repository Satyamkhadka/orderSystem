import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { OfferingComponent } from './offering/offering/offering.component';
import { AddOfferingComponent } from './offering/add-offering/add-offering.component';

const router: Routes = [
  { path: '', component: IndexComponent },
  // { path: 'profile', component: AdminNavigationComponent, canActivate: [AuthGuard] },
  { path: 'company-settings', component: CompanySettingsComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: OfferingComponent, canActivate: [AuthGuard] },
  { path: 'add-offering', component: AddOfferingComponent, canActivate: [AuthGuard] },






  { path: '**', redirectTo: '' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });
