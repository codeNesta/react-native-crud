import {combineReducers} from 'redux';

import BlogReducer from './BlogReducer';

const rootReducer = combineReducers({
     blogsList:BlogReducer
})

export default rootReducer;