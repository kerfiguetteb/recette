import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.scss']
})
export class NavbarProfileComponent {

  constructor(private router:Router) {}

  get session(){
    return sessionStorage;
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['auth']);
  }

}
