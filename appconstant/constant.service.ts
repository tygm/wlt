import {Injectable} from '@angular/core'

@Injectable()
export class APPConfigService{
    mainThemeColor:string="#7BC729";
    contentHeight:number=500;
    setContentHeight(height:number){
        this.contentHeight=height;
    }
}