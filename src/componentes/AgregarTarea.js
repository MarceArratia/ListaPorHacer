import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarTareaAction } from '../actions/tareasActions';
import { validarFormularioAction } from '../actions/validarAction';
import uuid from 'uuid/v4';


const AgregarTarea = () => {

//state del componente
const [tareas, guardarTarea] = useState('');
const [fecha, guardarFechaInicio] = useState('');
const [vencimiento, guardarFechaVencimiento] = useState('');


//dispatch para ejecutar acciones
const dispatch = useDispatch();
const agregarNuevaTarea = (tarea) =>dispatch( agregarTareaAction(tarea) );
const validarFormulario = (estado) => dispatch( validarFormularioAction(estado));

//useSelector es similiar a mapStateToProps en Hook
const error = useSelector( ( state ) => state.error);

//cuando tarea es enviada
const submitNuevaTarea = e=>{
    e.preventDefault();

   if(tareas.trim() === ''|| fecha.trim() === '' || vencimiento.trim() === ''){
    validarFormulario(true);
    return;
   }
   validarFormulario(false);


    //crear nueva tarea
agregarNuevaTarea({
    id:uuid(),
    tareas,
    fecha,
    vencimiento
})

 //reiniciar form
guardarTarea('');
guardarFechaInicio('');
guardarFechaVencimiento('');

}
    return(
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Agrega tareas aquí</h2>
                <form onSubmit={submitNuevaTarea}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Tareas</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Tareas" 
                                value={tareas}
                                onChange={e => guardarTarea(e.target.value)}  
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha Inicio</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input 
                                type="date" 
                                className="form-control"
                                value={fecha}
                                onChange={e => guardarFechaInicio(e.target.value)}  
                            />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha vencimiento</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input 
                                type="date" 
                                className="form-control" 
                                value={vencimiento}
                                onChange={e => guardarFechaVencimiento(e.target.value)}  
                            />
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>
               
               { error.error ? <div className="alert alert-danger text-center p2">Todos los campos son obligatorios</div> : null}
            </div>
    </div>
    );
}

export default AgregarTarea;