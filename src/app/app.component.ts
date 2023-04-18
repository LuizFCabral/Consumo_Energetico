import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Consumo_Energetico';

  nPessoas: number = 0;
  nComodos: number = 0;
  nTv: number = 0;
  nComputador: number = 0;
  tarifa: number = 0;
  mqLavar: boolean = false;
  mqSecar: boolean = false;

  getNPessoas(event: any) {
    this.nPessoas = Number(event);
  }
  getNComodos(event: any) {
    this.nComodos = Number(event);
  }
  getNTv(event: any) {
    this.nTv = Number(event);
  }
  getNComputador(event: any) {
    this.nComputador = Number(event);
  }
  getTarifa(event: any) {
    this.tarifa = Number(event);
  }
  getMqLavar(event: any) {
    this.mqLavar = event;
  }
  getMqSecar(event: any) {
    this.mqSecar = event;
  }

  calcular() {
    let gastoBanho =
      ((5000 * 0.16666) / 1000) * this.tarifa * 30 * this.nPessoas;
    let gastoMqLavar = 0;
    if (this.mqLavar) gastoMqLavar = ((1500 * 1) / 1000) * this.tarifa * 16; //analisar o número de horas
    let gastoMqSecar = 0;
    if (this.mqSecar) gastoMqSecar = ((3500 * 1) / 1000) * this.tarifa * 12;
    let gastoTv = ((200 * 5) / 1000) * this.tarifa * 30 * this.nTv;
    let gastoComputador =
      ((350 * 5) / 1000) * this.tarifa * 30 * this.nComputador; //analisar o número de horas
    let gastoLampada = ((15 * 10) / 1000) * this.tarifa * 30 * this.nComodos; //analisar o número de horas
  }
}
