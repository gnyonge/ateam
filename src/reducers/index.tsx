import { combineReducers } from 'redux';

import request from './request';

const rootReducer = combineReducers({
    request
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>