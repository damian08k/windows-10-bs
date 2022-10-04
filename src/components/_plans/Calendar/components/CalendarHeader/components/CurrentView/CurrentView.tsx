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

  const renderViewContent = () => {
    if (!isMonthsView && !isYearsView) {
      return (
        <>
          {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(0, month))}
          <span className={classes.calendarViewYear}>{year}</span>
        </>
      );
    } else if (isMonthsView) {
      return year;
    } else if (isYearsView && highlightedYears.length) {
      return `${highlightedYears[0].year} - ${betterAt(highlightedYears, -1).year}`;
    }
  };

  return <div className={classes.root}>{renderViewContent()}</div>;
};

export default CurrentView;
