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

  parteCalc(potencia: number, horasdia: number, diasmes: number): number {
    let soma = ((potencia * horasdia) / 1000) * this.tarifa * diasmes;

    return soma;
  }

  calcular() {
    this.totalPagar = 0;

    this.totalPagar += this.parteCalc(5000, 0.16666, 30) * this.nPessoas;
    if (this.mqLavar) this.totalPagar += this.parteCalc(1500, 1, 16);
    if (this.mqSecar) this.totalPagar += this.parteCalc(3500, 1, 4);
    this.totalPagar += this.parteCalc(200, 5, 30) * this.nTv;
    this.totalPagar += this.parteCalc(350, 5, 30) * this.nComputador;
    this.totalPagar += this.parteCalc(15, 10, 30) * this.nComodos;

    this.visibility = true;
  }
}
