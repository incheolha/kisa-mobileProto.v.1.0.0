import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {HomePage} from '../home/home';
import {ForgotPasswordPage} from "../forgot-password/forgot-password";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public nav: NavController) {
  }

  // go to register page
  register() {
    this.nav.push(RegisterPage);
  }

  // go to home page
  login() {
    this.nav.setRoot(HomePage);
  }

  // go to forgot password page
  forgotPwd() {
    this.nav.push(ForgotPasswordPage);
  }
}
