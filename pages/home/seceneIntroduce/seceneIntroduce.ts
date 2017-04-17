import {Component} from '@angular/core';
import { SeneceListFactory } from '../../../service/secenelist.service';
import { Secene } from '../../../model/secene';
@Component({templateUrl:"seceneIntroduce.html"})
export class SeceneIntroduce{
    secene:Secene;
    constructor(public mSeneceListFactory:SeneceListFactory) {
        this.secene=mSeneceListFactory.getCurrentSecene();
    }
}