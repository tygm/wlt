import {Injectable} from '@angular/core'
import {Secene} from '../model/Secene'

@Injectable()
export class SeneceListFactory{
    currentSecene:Secene={id:1,name:"夫子庙",desc:"夫子庙景点多多欢迎游览",pic:[],subSecene:[]};
    constructor(){

    }
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
    setCurrentSecene(secene:Secene){
         this.currentSecene.name=secene.name;
    }
    getCurrentSecene():Secene{
        return this.currentSecene;
    }
}