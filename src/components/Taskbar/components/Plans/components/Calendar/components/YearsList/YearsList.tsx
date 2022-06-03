import { FC } from 'react';

import useFillYears from 'hooks/useFillYears';
import { YearType } from 'types/components/calendar/yearType.type';
import getSplittedToday from 'utils/getSplittedToday';

import classes from './YearsList.module.css';

type Props = {
  today: string;
};

const YearsList: FC<Props> = ({ today }) => {
  const { year } = getSplittedToday(today);

  const years = useFillYears(year);

  return (
    <div className={classes.root}>
      {years.map(({ id, type, year }) => (
        <div
          key={id}
          className={`${classes.yearElement} ${type === YearType.CURRENT && classes.current} ${
            classes[type.toLowerCase()]
          }`}
        >
          {year}
        </div>
      ))}
    </div>
  );
};

export default YearsList;
