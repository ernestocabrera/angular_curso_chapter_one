import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre  : string = 'Iron Man';
    edad    : number = 45;
    universo: string = 'Marvell';

    hereoToString():string{
        return `${this.nombre},el superheroe de ${this.universo} tiene ${this.edad} años`
    }
    get heroeCapitalizado():string{
        return this.nombre.toUpperCase();
    }
}