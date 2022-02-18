import Login from './myLogin';
import Profile from'./myLogin';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    proUser: Profile,
    logUser: Login  
 });
export default allReducers;