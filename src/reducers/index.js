import{ combineReducers} from 'redux';
import cosaReducer from './cosaReducer';
import validacionReducer from './validacionReducer';

export default combineReducers({
    tarea: cosaReducer,
    error: validacionReducer
});