import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { borrarTareaAction } from '../actions/tareasActions';
import {ordenarFase} from '../actions/tareasActions'
import { ordenarFecha} from '../actions/tareasActions';
import { ordenarVencimiento} from '../actions/tareasActions';

const ListadoTareas = () => {

    //obtener tareas del state
    const tarea = useSelector((state) => state.tarea);

    //mensaje condicional
    const mensaje = Object.keys(tarea.tarea).length === 0 ? 'No Hay Tareas' : 'Administra las Tareas aquí';




    //dispatch para mandar llamar laaciion de eliminar
const dispatch = useDispatch();
function ordenarSelect(option){
   if(option === "Fase"){
    dispatch(ordenarFase());
   }
   if(option === "Fecha Ingreso"){
    dispatch(ordenarFecha());
   }
   if(option === "Fecha Vencimiento"){
    dispatch(ordenarVencimiento());
   }
};

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
                <div className="lista-citas">

    <div>
        <p className="card-text">Ordenar:
            <select onChange={e => ordenarSelect(e.target.value)} >
   
            <option value="0" defaultValue>Seleccione orden</option>
            <option value="Fecha Ingreso">Fecha Ingreso</option>
            <option value="Fase">Fase</option>
            <option value="Fecha Vencimiento">Fecha Vencimiento</option>
             </select>
        </p>
        </div>
                    {tarea.tarea.map(tareas => (
                        <div key={tareas.id} className="media mt-3">
                        <div className="media-body">
                            <h3 className="mt-0">{tareas.tareas}</h3>
                            <p className="card-text"><span>Fecha Inicio</span>{tareas.fecha}</p>
                            <span>Fecha Vencimiento:</span> <input type="date" className="card-text" value={tareas.vencimiento}/>
                            <p className="card-text"><span>Fase:</span> <br />{tareas.fase} 
                            <select  className="buttonAddFood" id="burgerTypes" value={tareas.fase}>
                                <option value="Atrasada">Atrasada</option>
                                <option value="Pendiente">Pendiente</option>
                                <option value="Liberada">Liberada</option>
                            </select>
                            </p>
                            <button 
                                className="btn btn-danger"
                                onClick={() => dispatch(borrarTareaAction(tareas.id))
                                }>Borrar &times;
                                
                            </button>
                        </div>
                    </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ListadoTareas;