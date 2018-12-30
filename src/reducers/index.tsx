import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import { reducer as reduxFormsReducer } from 'redux-form';

export default combineReducers({
    form: reduxFormsReducer,
    name: AppReducer,
})