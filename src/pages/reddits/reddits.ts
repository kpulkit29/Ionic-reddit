import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Services } from "../../providers/services";
import { New } from "../new/new";
import { Settings } from "../settings/settings"; 
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html',
})
export class Reddits {
  item:any;
  category:any;
  limits:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private serve:Services,private storage:Storage) {
    //this.category=navParams.get("cats");
    //this.limits=navParams.get("lims");
    this.default();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Reddits');
  }
  default(){
 // this.category="sports";
  //this.limits=5;
 if(this.storage.get('category') != null){
       this.storage.get('category').then((val)=>{
            this.category=val;
      });
    } else{
      this.category="sports";
    }

    if(this.storage.get('limit') != null){
       this.storage.get('limit').then((val)=>{
            this.limits=val;
      }); 

    } else{
      this.limits=5;
    }
}
  ngOnInit(){
    this.getpost(this.category,this.limits);
  }
   getpost(cate,limit){
 this.serve.getPost(cate,limit).subscribe(response=>{
   this.item=response.data.children;
 });
   }
   article(items){
  this.navCtrl.push(New,{
    detail:items
  });
   }
   choice(){
     this.getpost(this.category,this.limits);
   }
}
