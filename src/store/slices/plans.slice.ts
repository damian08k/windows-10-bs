import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppStartListening } from 'store/listenerMiddleware';

import { EventData, PlansState } from 'types/store/plansState.type';
import { RootState } from 'types/store/store.type';

const initialPlansState = {
  isPlanOpen: false,
  isEventsVisible: true,
  events: JSON.parse(localStorage.getItem('events') || '[]'),
} as PlansState;

const plansSlice = createSlice({
  name: 'plans',
  initialState: initialPlansState,
  reducers: {
    togglePlansVisibility(state, action: PayloadAction<boolean>) {
      state.isPlanOpen = action.payload;
    },
    toogleEventsVisibility(state, action: PayloadAction<boolean>) {
      state.isEventsVisible = action.payload;
    },
    addEvent(state, action: PayloadAction<EventData>) {
      state.events.push(action.payload);
    },
  },
});

export const plansActions = plansSlice.actions;

export default plansSlice.reducer;

export const addPlansListeners = (startListening: AppStartListening) => {
  startListening({
    actionCreator: plansActions.addEvent,
    effect: (_, api) => {
      const currentState = api.getState() as RootState;
      const events = currentState.plans.events;

      localStorage.setItem('events', JSON.stringify(events));
    },
  });
};
