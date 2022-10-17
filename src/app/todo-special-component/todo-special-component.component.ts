import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo-component/todo';

@Component({
  selector: 'app-todo-special-component',
  templateUrl: './todo-special-component.component.html',
  styleUrls: ['./todo-special-component.component.css']
})
export class TodoSpecialComponentComponent implements OnInit {
  @Input() todoObj! : Todo
  @Output() deleteItem : EventEmitter<Todo> = new EventEmitter()
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  methodClick(para:Todo){
    this.deleteItem.emit(para)

  }
  onCheck(para:Todo){
    this.todoCheckBox.emit(para)

  }


}
