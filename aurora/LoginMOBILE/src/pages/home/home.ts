import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username: string;
  public password: string;


  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');

  }
}
