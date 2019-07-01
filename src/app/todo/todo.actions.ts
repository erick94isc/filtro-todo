
import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const UPDATE_TODO = '[TODO] Actualizar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const TOGGLEAll_TODO = '[TODO] Seleccionar todo';


export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor( public texto: string) {}
}



export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor( public id: number) {}
}

export class UpdateTodoAction implements Action {
    readonly type = UPDATE_TODO;

    constructor( public id: number, public texto: string) {}
}


export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;

    constructor( public id: number) {}
}


export class ToggleAllAction implements Action {
    readonly type = TOGGLEAll_TODO;
    constructor( public completado: boolean) {}
}




export type Acciones = AgregarTodoAction | ToggleTodoAction | UpdateTodoAction| BorrarTodoAction | ToggleAllAction ;