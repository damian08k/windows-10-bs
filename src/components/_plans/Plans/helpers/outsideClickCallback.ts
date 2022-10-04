import { Dispatch } from '@reduxjs/toolkit';

import { calendarActions } from 'store/slices/calendar.slice';
import { plansActions } from 'store/slices/plans.slice';

const resetPlansViews = (dispatch: Dispatch): void => {
  dispatch(plansActions.togglePlansVisibility(false));
  dispatch(calendarActions.setIsMonthsView(false));
  dispatch(calendarActions.setIsYearsView(false));
};

export default resetPlansViews;
