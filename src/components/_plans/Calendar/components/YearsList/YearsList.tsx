import { FC, useRef } from 'react';

import { Year } from './components/Year/Year';

import { useArrowFocus } from 'hooks/useArrowFocus';

import { FocusConfig } from 'types/hooks/focusConfig.type';

import { useFillYears } from '_plans/Calendar/hooks/useFillYears';
import { LAST_MAX_HIGHLIGHT_YEAR } from 'src/constants';

import classes from './YearsList.module.css';

type Props = {
  year: number;
};

const YearsList: FC<Props> = ({ year }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const yearsList = useFillYears(year > LAST_MAX_HIGHLIGHT_YEAR ? LAST_MAX_HIGHLIGHT_YEAR : year);

  const initialFocus = yearsList?.currentValues.findIndex(year => year.isCurrent);
  const [focus, setFocus] = useArrowFocus(
    yearsList?.currentValues?.length as number,
    containerRef,
    4,
    initialFocus,
  );

  return (
    <div className={classes.root} ref={containerRef}>
      {yearsList?.currentValues.map((year, index) => {
        const isFocus = focus === index;

        const focusConfig: FocusConfig = {
          index,
          isFocus,
          setFocus,
        };

        return (
          <Year key={year.id} yearElement={year} focusConfig={focusConfig} yearList={yearsList} />
        );
      })}
    </div>
  );
};

export default YearsList;
