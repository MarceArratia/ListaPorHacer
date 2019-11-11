export const agregarTareaAction = (tarea) =>{
return{
    type:'AGREGAR_TAREA',
    payload: tarea
}
}
export const borrarTareaAction = id => {
    return{
        type: 'BORRAR_TAREA',
        payload: id
    }
}
export const ordenarFase =()=> {
   return {
       type:'ORDENAR_FASE'
   } 
    }

export const ordenarFecha =()=> {
    console.log("llega");
    return {
        type:'ORDENAR_FECHA'
    } 
     } 

export const ordenarVencimiento =()=> {
     return {
        type:'ORDENAR_VENCIMIENTO'
    } 
     } 