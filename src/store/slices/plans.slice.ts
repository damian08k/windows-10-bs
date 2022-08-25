import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PlansState } from 'types/store/plansState.type';

const initialPlansState = {
  // ! CHANGE THIS WHEN ALL FEATURES WILL BE FINISHED
  isPlanOpen: true,
  isEventsVisible: true,
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
  },
});

export const plansActions = plansSlice.actions;

export default plansSlice.reducer;
