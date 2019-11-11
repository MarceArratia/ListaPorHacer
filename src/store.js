import { createStore } from 'redux';
import reducer from './reducers';
import { obtenerStateStorage, guardarStateStorage } from './localstorage';

//definir state inicial
// const initialState = [];


//obtener tareas de localstorage
const storageState = obtenerStateStorage();

 const store = createStore(
    reducer, 
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () =>{
    guardarStateStorage({
        tarea: store.getState().tarea
    })
})

export default store;
