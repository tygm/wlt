import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

//Custom
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SeceneList } from '../modals/secenelist.modal';
import {APPConfigService} from '../appconstant/constant.service'
import {SeneceListFactory} from '../service/secenelist.service'
import {SeceneIntroduce} from '../pages/home/seceneIntroduce/seceneIntroduce';
import {Yuyindaoyou} from '../pages/home/yuyindaoyou/yuyindaoyou';

//Native
import { IBeacon } from '@ionic-native/ibeacon';
import { Transfer,  TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SeceneList,
    SeceneIntroduce,
    Yuyindaoyou
  ],
  imports: [
    BrowserModule,
    //ionic统一配置
    IonicModule.forRoot(MyApp,{
      backButtonText: '返回',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SeceneList,
    SeceneIntroduce,
    Yuyindaoyou
  ],
  providers: [
    StatusBar,
    SplashScreen,
    APPConfigService,
    SeneceListFactory,
    IBeacon,Transfer,TransferObject,File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
