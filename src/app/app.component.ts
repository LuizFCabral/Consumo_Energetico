import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Consumo_Energetico';
  n1!: number;

  getN1(event: any) {
    this.n1 = Number(event);
    console.log(this.n1);

  }
}
