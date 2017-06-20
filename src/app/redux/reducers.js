import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { aviaReducer } from './modules/avia';

const rootReducer = combineReducers({
        routing: routerReducer,
        avia: aviaReducer
    });

export default rootReducer;
