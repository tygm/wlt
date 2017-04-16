import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  //个人中心菜单列表项数据
  menuitems=[{"img":"../../assets/img/meicon_1.png",name:"我的游程"},
  {"img":"../../assets/img/meicon_2.png",name:"我的订单"},
  {"img":"../../assets/img/meicon_3.png",name:"我的门票"},
  {"img":"../../assets/img/meicon_4.png",name:"我的购物车"},
  {"img":"../../assets/img/meicon_5.png",name:"我的优惠券"},
  {"img":"../../assets/img/meicon_6.png",name:"我的地址"},
  {"img":"../../assets/img/meicon_7.png",name:"建议与反馈"},
  {"img":"../../assets/img/meicon_8.png",name:"设置"},
  {"img":"../../assets/img/meicon_9.png",name:"关于我们"}];
  constructor(public navCtrl: NavController) {

  }

}
