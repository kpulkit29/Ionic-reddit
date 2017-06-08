import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Reddits } from '../reddits/reddits';
import { Services } from "../../providers/services";
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {
   category:any;
   limit:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
    this.getdefault();
  }
  getdefault(){
   if(this.storage.get('category') != null){
       this.storage.get('category').then((val)=>{
            this.category=val;
      });
    } else {
      this.category = 'sports';
    }

    if(this.storage.get('limit') != null){
       this.storage.get('limit').then((val)=>{
            this.limit=val;
      }); 

    } else {
      this.limit = 10;
    }
  }
  setDefaults(){
    this.storage.set("category",this.category);
    this.storage.set("limit",this.limit);
    this.navCtrl.push(Reddits,{cats:this.category,lims:this.limit});
  }

}
