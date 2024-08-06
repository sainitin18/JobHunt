import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { jobListingsApi } from './services/joblistings';
import { usersApi } from './services/users';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            jobListingsApi.middleware,
            usersApi.middleware
        ),
});
