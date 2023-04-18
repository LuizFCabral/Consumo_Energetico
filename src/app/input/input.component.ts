import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() holder!: string;
  value!: number;

  @Output() sendValue = new EventEmitter();

  onChange() {
    this.sendValue.emit(this.value);
  }
}
