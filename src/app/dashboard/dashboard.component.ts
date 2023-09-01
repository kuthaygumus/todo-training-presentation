import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodoItem } from 'src/models/model';
import { GenericDataService } from '../service/generic.data.service';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { TodoFilterComponent } from '../todo-filter/todo-filter.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {

  // view child example
  // @ViewChild(TodoFilterComponent) todoFilterComponent?: TodoFilterComponent;
  // @ViewChild('parentButton', { static: true }) parentButtonRef?: ElementRef<HTMLButtonElement>;

  // callChildFunctionFromParent() {
  //   return this.childNumber = this.todoFilterComponent?.childFunc(Math.random());
  // }
  // childNumber?: number;

  userName: string = 'Cool Developer';
  taskList: TodoItem[] = [];

  displayAll: boolean = true;

  constructor(private genericDataService: GenericDataService) {}

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');

    // make sure your button is on dom then you can access it
    // if(this.parentButtonRef?.nativeElement) {
    //   this.parentButtonRef.nativeElement.innerText = 'Parent Button';
    // }
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    if (this.displayAll) {
      this.taskList = this.genericDataService.getAllTodos();
    } else {
      this.taskList = this.genericDataService.getCompletedTodos();
    }
  }

  onDisplayAllChange(newValue: boolean) {
    this.displayAll = newValue;
    this.getTasks();
  }

  addTask(value: string) {
    if (value !== '') {
      this.genericDataService.addTask(value);
    }
  }

  removeTask(id: number) {
    this.genericDataService.removeTask(id);
  }

  changeText(): void {
    console.log('changeText');
  }
}
