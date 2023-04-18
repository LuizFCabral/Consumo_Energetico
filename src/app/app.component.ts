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
  totalConsumo: number = 0;
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

  consumo(potencia: number, horasdia: number, diasmes: number): number {
    let soma = ((potencia * horasdia) / 1000) * diasmes;

    return soma;
  }

  calcular() {
    this.totalConsumo = 0;

    this.totalConsumo += this.consumo(5000, 0.16666, 30) * this.nPessoas;
    if (this.mqLavar) this.totalConsumo += this.consumo(1500, 1, 16);
    if (this.mqSecar) this.totalConsumo += this.consumo(3500, 1, 4);
    this.totalConsumo += this.consumo(200, 5, 30) * this.nTv;
    this.totalConsumo += this.consumo(350, 5, 30) * this.nComputador;
    this.totalConsumo += this.consumo(15, 10, 30) * this.nComodos;

    this.totalPagar = this.totalConsumo * this.tarifa;

    this.visibility = true;
  }
}
