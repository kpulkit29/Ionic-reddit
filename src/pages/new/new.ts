import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Reddits } from "../reddits/reddits";
/**
 * Generated class for the New page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class New {
    item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=navParams.get("detail");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad New');
  }

}
