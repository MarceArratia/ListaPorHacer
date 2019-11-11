export const obtenerStateStorage = () =>{
    const tareasStorage = localStorage.getItem('tareas');
    if(tareasStorage === null){
        return undefined
    }
    return JSON.parse(tareasStorage);
}

export const guardarStateStorage = state =>{
    const tareasState = JSON.stringify(state);
    localStorage.setItem('tareas',tareasState);
}