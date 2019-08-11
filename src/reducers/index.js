import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import DealReducer from './DealReducer';

export default combineReducers({
    Login: LoginReducer,
    Deals:DealReducer
});