import { Component, OnInit } from '@angular/core';

import * as fromFiltros from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltros.filtroTodos [] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltros.filtroTodos;
  pendientes: number;
  constructor( public store: Store <AppState> ) { }

  ngOnInit() {
      this.store.subscribe(state => {
        this.filtroActual = state.filtro;
        this.contadorPendientes(state.todos);
      });

  }


  cambiarFiltro( filtro: fromFiltros.filtroTodos) {
    this.store.dispatch( new fromFiltros.SetFiltroAction(filtro));
  }

  contadorPendientes( todos: Todo []) {
    this.pendientes = todos.filter( todo => !todo.completado).length;    
  }

  limpiar(){
    
  }

}
