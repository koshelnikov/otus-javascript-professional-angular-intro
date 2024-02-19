import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  standalone: true
})
export class CounterComponent {

  @Input()
  counter: number = 0;

  @Output()
  count = new EventEmitter<number>()


  onButtonClick() {
    this.counter++;
    this.count.emit(this.counter)
  }
}
