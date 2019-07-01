import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, UpdateTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Todo;
  checkField: FormControl;
  txtInput: FormControl;
  editando: boolean; 

  @ViewChild('txtInputRef', { static:true}) txtInputRef: ElementRef;

  constructor( private store: Store <AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.checkField.valueChanges.subscribe( () =>{
        this.store.dispatch(new ToggleTodoAction(this.todo.id));
    })
  }

  editar() {
    this.editando = true;
    setTimeout( () => {
      this.txtInputRef.nativeElement.select();
    });
  }

  terminarEdicion() {
    this.editando = false;
    this.store.dispatch(new UpdateTodoAction(this.todo.id, this.txtInput.value));
  }

  eliminarTarea() {
     this.store.dispatch(new BorrarTodoAction(this.todo.id));
  }

}
