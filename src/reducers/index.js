import { combineReducers } from 'redux';
import { score } from './scoreBoardReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    score,  
  routing: routerReducer
});

export default rootReducer;
