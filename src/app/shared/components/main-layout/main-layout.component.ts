import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../login.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private router: Router, public login: LoginService) { }

  ngOnInit(): void {
  }

  logout(event: Event): void {
    event.preventDefault();

    this.login.logout();
    this.router.navigate(['login']);
  }
}
