import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Interpolation des strings
  square(nbr: number): number {
    return nbr * nbr
  }
  title: string = 'Mon titre';
  nombre: number = 10;
  bool: boolean = true;
  obj: {} = {
    cle: 'ma cle'
  }

  //Liaison des propriétés
  date: string = "number";
  btnEnabled: boolean = false;

  //Liaison d'évènements
  color: string = "red";
  changeColor(color: string): void {
    this.color = color
  }

  //Double data-binding
  content: string = 'Bonjour';

  //Les directives
  display: boolean = true;
  color2: string = '';

  public users: Array<{ nom }> = [];

  constructor() {
    this.users.push({nom: "Jean"})
    this.users.push({nom: "Julie"})
    this.users.push({nom: "Paul"})
  }
}
