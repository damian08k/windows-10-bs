import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IsPlanOpen, PlansState } from 'types/store/plansState.type';

const initialPlansState = {
  isPlanOpen: false,
} as PlansState;

const plansSlice = createSlice({
  name: 'plans',
  initialState: initialPlansState,
  reducers: {
    togglePlansVisibility(state, action: PayloadAction<IsPlanOpen>) {
      state.isPlanOpen = action.payload;
    },
  },
});

export const plansActions = plansSlice.actions;

export default plansSlice.reducer;
