import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo-component/todo';

// import {len} from '../todo-component/todo-component.component'
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title!:string ;
  desc!:string;
  @Output() addItem: EventEmitter<Todo> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    
    var todo={
      
      Sno:23,
      title:this.title,
      desc:this.desc,
      active:true,
      

    }
   
    console.log(todo);
    
    this.addItem.emit(todo)
    // Sno!:number
    // title!:string
    // desc!:string
    // active!:boolean
  }

}
