import { combineReducers } from '@reduxjs/toolkit';
import { jobListingsApi } from './services/joblistings';
import { usersApi } from './services/users';

const rootReducer = combineReducers({
    [jobListingsApi.reducerPath]: jobListingsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
});

export default rootReducer;
