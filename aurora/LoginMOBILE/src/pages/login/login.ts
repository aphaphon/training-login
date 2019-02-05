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


  constructor(public navCtrl: NavController, public http: HttpClient) {
  }

  Register() {
    this.navCtrl.push(RegisterPage)
  }

  // Login() {
  //   this.http.get<boolean>("https://localhost:5001/api/Login/"+this.username+"/"+this.password).subscribe(
  //   it => {
  //     this.loginCheck = it;
  //       alert(JSON.stringify('success'));
  //       console.log(this.loginCheck)
  //     },
  //     error => {
  //       alert(JSON.stringify('unsuccess'));
  //     });

  //     if (this.loginCheck == true) {
  //       this.navCtrl.push(HomePage);   
  //     }
  //     else{
  //       alert(JSON.stringify('โปรดตรวจสอบใหม่อีกครั้ง'));
  //     }
  // }

  Login() {
    this.http.post<boolean>("https://localhost:5001/api/Login/" + this.username + "/" + this.password,
      {
        username: this.username,
        password: this.password
      }).subscribe(
        it => {
          this.loginCheck = it;
          console.log(this.loginCheck)
        });
        //this.navCtrl.push(HomePage)
  }
}
