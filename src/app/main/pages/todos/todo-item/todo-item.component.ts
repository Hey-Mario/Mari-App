import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/main/Model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input () todo!: Todo;
  @Input() checked!: boolean;
  constructor() { }

  ngOnInit(): void {
  }
}
