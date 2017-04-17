import { Component ,OnInit,ViewChild,ElementRef,Renderer } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { SeceneList } from '../../modals/secenelist.modal';
import { Secene } from '../../model/secene';
import { SeneceListFactory } from '../../service/secenelist.service';
import {SeceneIntroduce} from './seceneIntroduce/seceneIntroduce';
import {Yuyindaoyou} from './yuyindaoyou/yuyindaoyou';
import {APPConfigService} from '../../appconstant/constant.service';
declare var BMap;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  @ViewChild(Content) content: Content;//获取content对象
  mapInited:boolean=false;
  secene:Secene;
  constructor(public modalController:ModalController,public navCtrl: NavController,public el: ElementRef,
  public render:Renderer,public mSeneceListFactory:SeneceListFactory ,public mAPPConfigService:APPConfigService) {
  
  this.secene=this.mSeneceListFactory.getCurrentSecene();  
  mSeneceListFactory.currentSeceneChanged$.subscribe(
      secene => {
        this.secene=secene;
      }); 
     // navCtrl.push(AboutPage);
  }
  goToOtherPage(id:number){
    switch(id){
      case 1:
      this.navCtrl.push(SeceneIntroduce);
      break;
      case 4:
      this.navCtrl.push(Yuyindaoyou);
      break;
    }
  }
  ngOnInit(){

  }
  ionViewWillEnter(){
    //地图多次初始化会出错。此处设置只在首次载入时进行初始化
    if(!this.mapInited){
      this.mapInited=true;
      this.mAPPConfigService.setContentHeight(this.content.contentHeight);
     var height=this.content.contentHeight-280-5;
     this.render.setElementStyle(this.el.nativeElement.querySelector('#homemap'),"height",height+"px");
     var map = new BMap.Map("homemap");
    map.centerAndZoom(new BMap.Point(118.796868,32.027075),16);
    map.enableScrollWheelZoom(true);
      var BDPoints=[];
    var geoMetaData=`118.79221,32.024067;118.792946,32.023822;118.793099,32.024167;118.793665,32.024243;
    118.794986,32.02458;118.795561,32.02393;118.795848,32.024488;118.799396,32.026845;118.797883,32.028896;
    118.796338,32.028254;118.794694,32.027572;118.793939,32.027182;118.793759,32.026815;118.793867,32.026394;
    118.793706,32.025743;118.794155,32.025575;118.794191,32.025223;118.794191,32.025223`;
    var geoData=geoMetaData.split(";");
    for(var a=0;a<geoData.length;a++){
      var geoData_=geoData[a].split(",");
var p=new BMap.Point(geoData_[0],geoData_[1]);
          BDPoints.push(p);
    }
      var mPolygon=new BMap.Polygon(BDPoints);
     mPolygon.setStrokeWeight(2);
      mPolygon.setFillColor("#7BC729");
      map.addOverlay(mPolygon);
    var voiceLocs=`118.794963,32.02559;118.796679,32.027113;118.797829,32.02709;118.797487,32.026884
    ;118.796445,32.026715;118.795799,32.025514`;
    var voiceLocs2=voiceLocs.split(";");
var icon = new BMap.Icon('assets/img/erji_07.png', new BMap.Size(20, 32), {
    anchor: new BMap.Size(10, 30)
});
    for(var a=0;a<voiceLocs2.length;a++){
      var voiceLocs2_=voiceLocs2[a].split(",");
         map.addOverlay(new BMap.Marker(new BMap.Point(voiceLocs2_[0],voiceLocs2_[1]), {
          icon: icon
      }));
    }
    }
  }
  //打开弹出框选择景点
  openSeceneList(){
    let modal=this.modalController.create(SeceneList,{});
    modal.present();
  }
}