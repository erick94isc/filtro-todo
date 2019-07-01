
import * as fromFiltro from './filter.actions';
import { acciones, filtroTodos } from './filter.actions';

const estadoInicial: fromFiltro.filtroTodos = 'todos';


export function filtroReducer(state = estadoInicial, action: fromFiltro.acciones): fromFiltro.filtroTodos {

    switch (action.type) {
        case fromFiltro.SET_FILTRO:
            return action.filtro;
        
        default:
            return state;
    }
}
