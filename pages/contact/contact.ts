import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items=[{"img":"assets/img/banner-s_50.jpg","title":"盐水鸭超级大的盐水鸭","desc":"纯正口味的盐水鸭"
,"price":"88","distance":"12KM"},
{"img":"assets/img/banner-s_53.jpg","title":"盐水鸭超级大的盐水鸭","desc":"纯正口味的盐水鸭"
,"price":"88","distance":"12KM"}];
  constructor(public navCtrl: NavController) {

  }

}
