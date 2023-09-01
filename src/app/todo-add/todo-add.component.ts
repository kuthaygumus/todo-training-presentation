import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoAddComponent {


  @Output() addTodo = new EventEmitter();

  // for change detection
  checkRender(): boolean {
    console.log('TodoAddComponent: checkRender');
    return true;
  }

}
