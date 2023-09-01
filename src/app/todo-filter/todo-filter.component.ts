import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss'],
})
export class TodoFilterComponent {

  @Input() displayAll: boolean = false;
  @Output() displayAllChange = new EventEmitter<boolean>();

  onDisplayAllChange(newValue: boolean) {
    this.displayAll = newValue;
    this.displayAllChange.emit(newValue);
  }

  childFunc(randomNumber: number): number {
    console.log('childFunc Random Number is: ', randomNumber);
    return randomNumber;
  }
}
