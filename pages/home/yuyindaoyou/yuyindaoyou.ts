import {Component,Renderer,ElementRef} from '@angular/core';
import { SeneceListFactory } from '../../../service/secenelist.service';
import { Secene } from '../../../model/secene';
import {APPConfigService} from '../../../appconstant/constant.service';
import { IBeacon } from '@ionic-native/ibeacon';
declare var BMap;
@Component({templateUrl:"yuyindaoyou.html"})
export class Yuyindaoyou{
    secene:Secene;
    mapInited:boolean=false;
    constructor(public mSeneceListFactory:SeneceListFactory
    ,public render:Renderer,public el:ElementRef,public mAPPConfigService:APPConfigService,
    private ibeacon: IBeacon) {
        this.secene=mSeneceListFactory.getCurrentSecene();
        this.ibeacon.requestAlwaysAuthorization();
        let delegate = this.ibeacon.Delegate();
        // Subscribe to some of the delegate's event handlers
        delegate.didRangeBeaconsInRegion()
        .subscribe(
            data => console.log('didRangeBeaconsInRegion: ', data),
            error => console.error()
        );
        delegate.didStartMonitoringForRegion()
        .subscribe(
            data => console.log('didStartMonitoringForRegion: ', data),
            error => console.error()
        );
        delegate.didEnterRegion()
        .subscribe(
            data => {
            console.log('didEnterRegion: ', data);
            }
        );
        let beaconRegion = this.ibeacon.BeaconRegion('deskBeacon','fda50693-a4e2-4fb1-afcf-c6eb07647825');

        this.ibeacon.startMonitoringForRegion(beaconRegion)
        .then(
            () => console.log('Native layer recieved the request to monitoring'),
            error => console.error('Native layer failed to begin monitoring: ', error)
        );

    }

    ionViewWillEnter(){
    //地图多次初始化会出错。此处设置只在首次载入时进行初始化
    if(!this.mapInited){
      this.mapInited=true;
     var height=this.mAPPConfigService.contentHeight;
     this.render.setElementStyle(this.el.nativeElement.querySelector('#yydymap'),"height",height+"px");
     var map = new BMap.Map("yydymap");
    map.centerAndZoom(new BMap.Point(118.796868,32.027075),17);
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
var icon = new BMap.Icon('../../assets/img/erji_07.png', new BMap.Size(20, 32), {
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
}