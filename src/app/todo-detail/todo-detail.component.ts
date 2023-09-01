import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from 'src/models/model';
import { GenericDataService } from '../service/generic.data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  @Input() todo?: TodoItem;

  constructor(
    private genericDataService: GenericDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todo = this.genericDataService.getTaskById(id);
  }

  updateTodo(): void {
    this.genericDataService.updateTask(this.todo!);
    this.goBack();
  }

  goBack(): void {
    window.history.back();
  }
}
