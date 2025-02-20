import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{App_Title}}</h1>
<h3> La base es <strong>{{base}}</strong></h3>
<button (click)="acumular(base)"> {{base}} </button>
<span>{{numero}}</span>
<button (click)="acumular(-base)"> {{-base}} </button>
`
})
export class ContadorComponent{
    App_Title:string   = 'bases ernesto';
  numero : number = 0;
  base   : number = 15;
  sumar():void{
    this.numero+=1;
  }
  restar():void{
    this.numero-=1;
  }
  acumular(valor:number):void{
    this.numero+=valor;
  }
}