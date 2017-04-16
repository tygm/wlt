import { Component} from '@angular/core';
import { NavParams,Platform,ViewController } from 'ionic-angular';
import {SeneceListFactory} from '../service/secenelist.service'
import {Secene} from '../model/secene'
@Component({
  templateUrl:"./secenelist.modal.html"
})
export class SeceneList {
  seneces:Secene[]=[];
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public mSeneceListFactory:SeneceListFactory
    
  ) {
    mSeneceListFactory.getSeceneList().then(secenes1=>{this.seneces=secenes1;});
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  changeLoc(id:number){
    this.mSeneceListFactory.setCurrentSecene(id).then(
      result=>{if(result){alert("景点已切换");}}
    );
  }
}