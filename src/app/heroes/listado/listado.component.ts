import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
 heroes : string[] = ["Black Widow","Spiderman","Hulk","Iron Man","Thor"];
 deleteFirst(): void{
   if(this.heroes.length>0){
    let heroeToDel  = this.heroes.pop();
      //alert('Se ha eliminado el heroe  '+heroeToDel);    
    }

 }
}
