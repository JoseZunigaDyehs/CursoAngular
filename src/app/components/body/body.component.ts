import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  mostrar:boolean=false;

  frase:any = {
    mensaje:"Porque correr el riesgo, nunca es lo que vende...",
    autor: "Hordatoj"
  }

  personaje:string[] = ['Nacho','Jose','Josueño','AswONE','Dyehs'];
}
