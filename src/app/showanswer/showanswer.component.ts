import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-showanswer',
  templateUrl: './showanswer.component.html',
  styleUrls: ['./showanswer.component.css']
})
export class ShowanswerComponent {
  @Input() answer: string = "";
}
