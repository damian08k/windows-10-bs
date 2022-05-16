import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/clockState.type';
import getMonthsNames from 'utils/getMonthsNames';

import * as S from './CalendarMonthsList.styled';

const CalendarMonthsList: FC = () => {
  const { month } = useSelector((state: RootState) => state.showTodaysDay);
  const months = getMonthsNames();

  return (
    <S.MonthsContainer>
      {months.map(({ monthName, monthId }) => (
        <div key={monthName} className={`month ${month === monthId && 'currentMonth'}`}>
          {monthName}
        </div>
      ))}
    </S.MonthsContainer>
  );
};
export default CalendarMonthsList;
