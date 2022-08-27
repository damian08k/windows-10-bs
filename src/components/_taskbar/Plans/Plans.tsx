import { FC, useRef } from 'react';
import { useSelector } from 'react-redux';

import useOutsideClick from 'hooks/useOutsideClick';

import { calendarActions, initialSelectedDay } from 'store/slices/calendar.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';
import { useAppDispatch } from 'store/store';

import { RootState } from 'types/store/store.type';

import Calendar from '_taskbar/Calendar/Calendar';
import Events from '_taskbar/Events/Events';
import PlansDate from '_taskbar/PlansDate/PlansDate';
import ToggleEventsVisibility from '_taskbar/ToggleEventsVisibility/ToggleEventsVisibility';

import getSplittedToday from 'utils/getSplittedToday';
import mergeClasses from 'utils/mergeClasses';

import resetPlansViews from './helpers/outsideClickCallback';

import classes from './Plans.module.css';

type Props = {
  transitionClassName: string;
};

const Plans: FC<Props> = ({ transitionClassName }) => {
  const dispatch = useAppDispatch();
  const plansBoxContainerRef = useRef<HTMLDivElement>(null);
  const { isPlanOpen, isEventsVisible } = useSelector((state: RootState) => state.plans);
  const today = useSelector((state: RootState) => state.currentDate.today);

  const { month, year } = getSplittedToday(today);

  useOutsideClick<HTMLDivElement>(plansBoxContainerRef, () => {
    if (isPlanOpen) {
      resetPlansViews(dispatch);
      dispatch(
        currentDateActions.updateMonthAndYear({
          month,
          year,
        }),
      );
      dispatch(calendarActions.setSelectedDay(initialSelectedDay));
    }
  });

  return (
    <div
      ref={plansBoxContainerRef}
      className={mergeClasses(classes.root, {
        [classes.showPlans]: !transitionClassName.includes('false'),
      })}
    >
      <PlansDate />
      <Calendar />
      {isEventsVisible && <Events />}
      <ToggleEventsVisibility />
    </div>
  );
};

export default Plans;
