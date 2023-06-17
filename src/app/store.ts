import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { clientsSlice } from '../features/clients/clientsSlice';
import { api } from './api';

export const store = configureStore({
  devTools: import.meta.env.MODE !== 'production',
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware().concat(api.middleware);

    if (import.meta.env.MODE !== 'production' && import.meta.env.VITE_ENABLE_LOGGER === 'true') {
      middleware.push(logger);
    }

    return middleware;
  },
  reducer: {
    [api.reducerPath]: api.reducer,
    [clientsSlice.name]: clientsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
