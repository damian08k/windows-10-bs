import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';

import { YearElement } from 'types/components/calendar/yearElement.type';

import { getCalendarYearsValues } from 'utils/calendar/getCalendarYearsValues';

const useFillYears = (year: number): YearElement[] => {
  const { today } = useAppSelector(state => state.currentDate);
  const [years, setYears] = useState<YearElement[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const allVisibleYears = getCalendarYearsValues(year, today, dispatch);

    setYears(old => [...old, ...allVisibleYears]);

    return () => setYears([]);
  }, [year]);

  return years;
};

export default useFillYears;
