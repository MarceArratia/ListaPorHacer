import React from 'react';
import AgregarTarea from './componentes/AgregarTarea';
import ListadoTareas from './componentes/ListadoTareas';


//redux
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="container">
     <header>
       <h1 className="text-center">Cosas por Hacer</h1>
     </header>
     <div className="row mt-3">
       <div className="col-md-6">
        <AgregarTarea />
       </div>
       <div className="col-md-6">
        <ListadoTareas />
       </div>
     </div>
    </div>
    </Provider>
  );
}

export default App;
