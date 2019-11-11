const initialState ={
    tarea: []
}

export default function(state = initialState, action){
    switch(action.type){
        case 'AGREGAR_TAREA':
            
            if(action.payload.fecha > action.payload.vencimiento){
                action.payload.fase ="Atrasada";
            }
            if(action.payload.fecha <= action.payload.vencimiento){
                action.payload.fase ="Pendiente"
            }
            console.log(action.payload);
            return{
                ...state,
                tarea: [...state.tarea, action.payload]
            }
        case 'BORRAR_TAREA':
            return{
                ...state,
                tarea: state.tarea.filter(tarea => tarea.id !== action.payload)
            }
            case 'ORDENAR_FASE':
                return{
                    ...state,
                    tarea: state.tarea.sort(function (a, b){ if(a.fase>b.fase){return 1}else{return -1}}) 
                }
            case 'ORDENAR_FECHA':
                return{
                    ...state,
                    tarea: state.tarea.sort(function (a, b){ if(a.fecha>b.fecha){return 1}else{return -1}}) 
                }
             case 'ORDENAR_VENCIMIENTO':
                return{
                    ...state,
                    tarea: state.tarea.sort(function (a, b){ if(a.vencimiento>b.vencimiento){return 1}else{return -1}}) 
                        }
            default:
                return state;
                
        

    }
}