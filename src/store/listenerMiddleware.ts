import { createListenerMiddleware, TypedStartListening } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from 'types/store/store.type';

import { addPlansListeners } from './slices/plans.slice';

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const listenMiddleware = createListenerMiddleware();

// Listeners
const startListening = listenMiddleware.startListening as AppStartListening;

addPlansListeners(startListening);
