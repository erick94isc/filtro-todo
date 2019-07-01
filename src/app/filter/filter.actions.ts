import { Action } from '@ngrx/store';

export const SET_FILTRO = '[Filter] Set Filtro';

export type filtroTodos = 'todos' | 'completados' | 'pendientes';

export class SetFiltroAction implements Action {
    readonly type = SET_FILTRO;
    constructor( public filtro: filtroTodos ) {}

}


export type acciones = SetFiltroAction;