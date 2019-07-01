
import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';


const estadoInicial: Todo[] = [new Todo('Vencer a thanos'), new Todo('Salvar el mundo'), new Todo('Pedir traje a ironman')];


export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {

    switch (action.type) {
        case fromTodo.AGREGAR_TODO:

            const todo = new Todo(action.texto);
            return [...state, todo];

        case fromTodo.TOGGLE_TODO:
            return state.map(todoEdit => {
                if ( todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completado : !todoEdit.completado
                    } ;

                } else {
                    return todoEdit;
                }
            });
        case fromTodo.UPDATE_TODO:
            return state.map(todoUpdate => {
                if ( todoUpdate.id === action.id) {
                    return {
                        ...todoUpdate,
                        texto : action.texto
                    } ;

                } else {
                    return todoUpdate;
                }
            });

        case fromTodo.BORRAR_TODO:
            return state.filter( todoEdit => todoEdit.id !== action.id);   

        case fromTodo.TOGGLEAll_TODO:
            return state.map( toggle => {
                return {
                    ...toggle,
                    completado: action.completado
                };
            });
        default:
            return state;

            
    }
}