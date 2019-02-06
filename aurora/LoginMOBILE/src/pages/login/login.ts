import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { login } from '../../model/login';
import { v } from '@angular/core/src/render3';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public loginCheck: boolean
  public username: string
  public password: string

  public input: string


  constructor(public navCtrl: NavController, public http: HttpClient) {
  }

  Register() {
    this.navCtrl.push(RegisterPage)
  }

  Logined() {
    this.http.post<boolean>("https://localhost:5001/api/Login/login", {
      username: this.username,
      password: this.password
    }).subscribe(
      it => {
        this.loginCheck = it
        console.log(it)
        if (this.loginCheck == false) {
          alert(JSON.stringify('Please Login first to continue'));
        }
        else {
          this.navCtrl.push(HomePage);
        }
      });

  }

  // inputtest() {
  //   this.navCtrl.push(HomePage, {
  //     sendnavparam: this.input
  //   })

  }

