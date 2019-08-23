import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdminNavigationComponent } from './navigation/admin-navigation/admin-navigation.component';
import { ClientNavigationComponent } from './navigation/client-navigation/client-navigation.component';
import { FooterComponent } from './footer/footer.component';
import { OfferingComponent } from './offering/offering/offering.component';
import { AddOfferingComponent } from './offering/add-offering/add-offering.component';
import { OfferingViewComponent } from './client-offering/offering-view/offering-view.component';
import { AllOfferingComponent } from './client-offering/all-offering/all-offering.component';
@NgModule({
   declarations: [
      AppComponent,
      IndexComponent,
      CompanySettingsComponent,
      AboutComponent,
      LoginComponent,
      AdminNavigationComponent,
      ClientNavigationComponent,
      FooterComponent,
      OfferingComponent,
      AddOfferingComponent,
      OfferingViewComponent,
      AllOfferingComponent
   ],
   imports: [
      AngularFireAuthGuardModule,
      AngularFireStorageModule,
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      AngularFireAuthModule,
      routes
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
