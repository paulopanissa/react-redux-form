import { combineReducers } from 'redux';
import { reducer as reduxFormsReducer } from 'redux-form';

export default combineReducers({
    form: reduxFormsReducer
})