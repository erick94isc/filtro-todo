import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;

  constructor( private strore: Store <AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }


  agregarTodo() {
    console.log(this.txtInput.value);
    console.log(this.txtInput.valid);
    if ( this.txtInput.invalid) {
      return ;
    }
    this.strore.dispatch(new fromTodo.AgregarTodoAction(this.txtInput.value));
  }

}
