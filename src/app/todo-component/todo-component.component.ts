import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {
  localItem 
  todoArray!: Todo[];
  storeJson!:string
  constructor() {
    // this.storeJson = JSON.stringify(this.todoArray)
    this.localItem= localStorage.getItem("todoArray")
    if (this.localItem == null) {
      this.todoArray = []
    }
    else{

      this.todoArray = JSON.parse(this.localItem)
    }


  }

  ngOnInit(): void {
  }
  deleteItemParent(event: Todo) {
    // console.log(event);
    var index: number = this.todoArray.indexOf(event)
    this.todoArray.splice(index, 1)
    localStorage.setItem("todoArray", JSON.stringify(this.todoArray))

  }
  addItemParent(event: Todo) {
    // console.log(event);
    this.todoArray.push(event)
    localStorage.setItem("todoArray", JSON.stringify(this.todoArray))

  }
  doneParent(event:Todo) {
    // console.log(event);
    var index: number = this.todoArray.indexOf(event)
    this.todoArray[index].active = !(this.todoArray[index].active)
    

    localStorage.setItem("todoArray", JSON.stringify(this.todoArray))

  }



}



