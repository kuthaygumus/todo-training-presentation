import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { AppRoutingModule } from './app-routing.module';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailComponent,
    DashboardComponent,
    TodoFilterComponent,
    TodoAddComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
