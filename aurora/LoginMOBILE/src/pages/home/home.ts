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

  public getnavparam: string;


  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams) {
    this.getnavparam = navParams.get('sendnavparam')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');

  }
}
