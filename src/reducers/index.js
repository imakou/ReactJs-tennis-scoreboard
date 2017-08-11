import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import { score } from './scoreBoardReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    fuelSavings,
    score,  
  routing: routerReducer
});

export default rootReducer;
