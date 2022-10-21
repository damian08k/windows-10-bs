import { FC } from 'react';

import { useAppSelector } from 'store/hooks';

import betterAt from 'utils/betterAt';

import classes from './CurrentView.module.css';

type Props = {
  isMonthsView: boolean;
  isYearsView: boolean;
  month: number;
  year: number;
};

const CurrentView: FC<Props> = ({ isMonthsView, isYearsView, month, year }) => {
  const { highlightedYears } = useAppSelector(state => state.calendar);

  // TODO: think about moving it to some custom format function so it will be easier later to add multi language support
  const visibleMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    new Date(0, month),
  );
  const renderViewContent = () => {
    if (!isMonthsView && !isYearsView) {
      return (
        <button className={classes.calendarView} aria-label={`${visibleMonth} ${year}`}>
          <span className={classes.month}>{visibleMonth}</span>
          <span>{year}</span>
        </button>
      );
    } else if (isMonthsView) {
      return (
        <button className={classes.calendarView} aria-label={`${year}`}>
          <span>{year}</span>
        </button>
      );
    } else if (isYearsView && highlightedYears.length) {
      return `${highlightedYears[0].year} - ${betterAt(highlightedYears, -1).year}`;
    }
  };

  return <div className={classes.root}>{renderViewContent()}</div>;
};

export default CurrentView;
