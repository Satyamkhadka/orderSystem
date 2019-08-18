import { Component, OnInit } from '@angular/core';
import { FireauthService } from '../../_service/fireauth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  active: string;
  constructor(private fireauthService: FireauthService, private router: Router) { }
  ngOnInit() {
  }

  logout() {
    this.fireauthService.logout().then(cb => {
      console.log(cb);
      this.router.navigate(['/home']);
    }).catch(e => {
      console.log(e);
    });
  }
}
