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
  totalPagar: number = 0;
  visibility: boolean = false;

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
    let soma =0;
    soma+=
      ((5000 * 0.16666) / 1000) * this.tarifa * 30 * this.nPessoas;
    if (this.mqLavar) soma += ((1500 * 1) / 1000) * this.tarifa * 16; //analisar o número de horas
    if (this.mqSecar) soma += ((3500 * 1) / 1000) * this.tarifa * 12;
    soma += ((200 * 5) / 1000) * this.tarifa * 30 * this.nTv;
    soma +=
      ((350 * 5) / 1000) * this.tarifa * 30 * this.nComputador; //analisar o número de horas
    soma += ((15 * 10) / 1000) * this.tarifa * 30 * this.nComodos; //analisar o número de horas

    this.totalPagar = soma;
    this.visibility = true;

  }
}
