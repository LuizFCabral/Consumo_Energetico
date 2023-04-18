import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  @Input() holder!: string;
  checked: boolean = false;

  @Output() sendValue = new EventEmitter();

  onChecked() {
    this.checked = !this.checked;
    this.sendValue.emit(this.checked);
  }
}
