import {Injectable} from '@angular/core'
import {Secene} from '../model/Secene'
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class SeneceListFactory{
    currentSecene:Secene={id:1,name:"夫子庙",desc:"夫子庙景点多多欢迎游览",pic:[],subSecene:[]};
    // Observable string sources
    private currentSeceneSubject = new Subject<Secene>();
    // Observable string streams
    currentSeceneChanged$ = this.currentSeceneSubject.asObservable();
    // Service message commands 设置当前景点
    setCurrentSecene(secene:Secene){
        this.currentSecene=secene;
        this.currentSeceneSubject.next(secene);
    }
    //获取当前景点
    getCurrentSecene():Secene{
        return this.currentSecene;
    }
    constructor(){

    }
    //从服务器获取景点列表
    getSeceneList():Promise<Secene[]>{
        let promise=new Promise(function(resolve,reject){
            let secenes:Secene[]=[{
                id:1,name:"夫子庙",desc:"",pic:[],subSecene:[]
            },{
                id:2,name:"中山陵",desc:"",pic:[],subSecene:[]
            },{
                id:3,name:"玄武湖",desc:"",pic:[],subSecene:[]
            },{
                id:4,name:"故宫",desc:"",pic:[],subSecene:[]
            },{
                id:5,name:"长城",desc:"",pic:[],subSecene:[]
            }];
            resolve(secenes);
        });
        return promise;
    }
    //根据景点id获取指定景点
    getSepecifySecene(id:number):Promise<Secene>{
        let promise=new Promise(function(resolve,reject){
            let secenes:Secene[]=[{
                id:1,name:"夫子庙",desc:"",pic:[],subSecene:[]
            },{
                id:2,name:"中山陵",desc:"",pic:[],subSecene:[]
            },{
                id:3,name:"玄武湖",desc:"",pic:[],subSecene:[]
            },{
                id:4,name:"故宫",desc:"",pic:[],subSecene:[]
            },{
                id:5,name:"长城",desc:"",pic:[],subSecene:[]
            }];
            resolve(secenes[id]);
        });
        return promise;
    }
}