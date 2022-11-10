import { FC } from 'react';

import Arrows from './components/Arrows/Arrows';
import CurrentView from './components/CurrentView/CurrentView';

import mergeClasses from 'utils/mergeClasses';

import classes from './CalendarHeader.module.css';

type Props = {
  month: number;
  year: number;
  isMonthsView: boolean;
  isYearsView: boolean;
};

const CalendarHeader: FC<Props> = ({ month, year, isMonthsView, isYearsView }) => {
  return (
    <div className={classes.root}>
      <div className={mergeClasses(classes.dateInformation, classes.headerElement)}>
        <CurrentView
          isMonthsView={isMonthsView}
          isYearsView={isYearsView}
          year={year}
          month={month}
        />
      </div>
      <div className={classes.headerElement}>
        <Arrows />
      </div>
    </div>
  );
};

export default CalendarHeader;
