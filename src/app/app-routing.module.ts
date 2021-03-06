import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
// import { AuthGuard } from './_guards/auth.guard';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { OfferingComponent } from './offering/offering/offering.component';
import { AddOfferingComponent } from './offering/add-offering/add-offering.component';
import { OfferingViewComponent } from './client-offering/offering-view/offering-view.component';
import { AllOfferingComponent } from './client-offering/all-offering/all-offering.component';

const adminOnly = hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`);


const router: Routes = [
  { path: '', component: IndexComponent },
  // { path: 'profile', component: AdminNavigationComponent, canActivate: [AuthGuard] },
  {
    path: 'company-settings',
    component: CompanySettingsComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: OfferingComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'add-offering',
    component: AddOfferingComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'offerings',
    component: AllOfferingComponent
  },
  {
    path: 'offering',
    component: OfferingViewComponent
  },


  {
    path: '**',
    redirectTo: ''
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true, scrollPositionRestoration: 'enabled' });
