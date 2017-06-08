import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Services provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Services {
 url:String;
  constructor(public http: Http) {
    console.log('Hello Services Provider');
    this.url="https://www.reddit.com/r";
  }
  getPost(cat,lim){
    return this.http.get(this.url+"/"+cat+"/top.json?limit="+lim).map(res=>res.json());
  }

}
