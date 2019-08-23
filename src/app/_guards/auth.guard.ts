import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FireauthService } from '../_service/fireauth.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { CompanyConfig } from '../../environments/CompanyConfig';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private fireAuthService: FireauthService,
        private auth: AngularFireAuth
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return new Observable<boolean>((observer) => {

            firebase.auth().onAuthStateChanged(currentUser => {

                if (currentUser) {
                    // authorised so return true
                    //  console.log(currentUser);
                    if (firebase.auth()['currentUser']['email'] === CompanyConfig.adminEmail) {
                        // if (firebase.auth()['currentUser']['email']) {
                        observer.next(true);
                        observer.complete();
                    } else {
                        // not logged in so redirect to login page with the return url
                        this.router.navigateByUrl('/login', { queryParams: { returnUrl: state.url } });
                        observer.next(false);
                        observer.complete();
                    }
                } else {
                    // not logged in so redirect to login page with the return url
                    this.router.navigateByUrl('/login', { queryParams: { returnUrl: state.url } });
                    observer.next(false);
                    observer.complete();
                }

            });




        });
    }

}
