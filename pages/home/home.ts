import { Component ,OnInit,ViewChild,ElementRef,Renderer } from '@angular/core';
import { NavController,ModalController,NavParams,Platform,ViewController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { SeceneList } from '../../modals/secenelist.modal';
declare var BMap;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  @ViewChild(Content) content: Content;//获取content对象
  mapInited:boolean=false;
  constructor(public modalController:ModalController,public navCtrl: NavController,public el: ElementRef,public render:Renderer ) {

  }
  ngOnInit(){

  }
  ionViewWillEnter(){
    //地图多次初始化会出错。此处设置只在首次载入时进行初始化
    if(!this.mapInited){
      this.mapInited=true;
     var height=this.content.contentHeight-280-5;
     this.render.setElementStyle(this.el.nativeElement.querySelector('#homemap'),"height",height+"px");
     var map = new BMap.Map("homemap");
         map.centerAndZoom(new BMap.Point(118.796868,32.027775),17);
    map.enableScrollWheelZoom(true);
    }
  }
  //打开弹出框选择景点
  openSeceneList(){
    let modal=this.modalController.create(SeceneList,{});
    modal.present();
  }
}