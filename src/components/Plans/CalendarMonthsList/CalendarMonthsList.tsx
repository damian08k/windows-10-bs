import { FC } from 'react';

import getMonthsNames from 'utils/getMonthsNames';

import * as S from './CalendarMonthsList.styled';

const CalendarMonthsList: FC = () => {
  const months = getMonthsNames();

  return (
    <S.MonthsContainer>
      {months.map(month => (
        <div key={month} className="month">
          {month}
        </div>
      ))}
    </S.MonthsContainer>
  );
};
export default CalendarMonthsList;
