import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public username: string;
  public password: string;
  public rePassword: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    if (this.password == this.rePassword) {
      this.http.post("https://localhost:5001/api/Login",
        {
          username: this.username,
          password: this.password
        }).subscribe(
          it => {
            console.log('success')
          },
          error => {
            alert(JSON.stringify('unsuccess'));
          });
          this.navCtrl.push(LoginPage);
    }
    else {
      alert(JSON.stringify('Password and Re-Password does not match'));
    }

    


    // var alert =  this.alertController.create({
    //   header: 'Alert',
    //   subHeader: 'Subtitle',
    //   message: 'This is an alert message.',
    //   buttons: ['OK']
    // });

    //  alert.present();
  }




}
