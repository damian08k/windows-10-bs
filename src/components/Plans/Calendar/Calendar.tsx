import { FC } from 'react';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow_up.svg';

import * as S from './Calendar.styled';
import getDateElements from './helpers/getDateElements';

const Calendar: FC = () => {
  const { month, year } = getDateElements();

  const handleArrowDownClick = () => {
    console.log('down');
  };

  const handleArrowUpClick = () => {
    console.log('up');
  };

  return (
    <S.CalendarContainer>
      <S.CalendarHeader>
        <S.DateInformation>
          <span className="month">{month}</span>
          <span>{year}</span>
        </S.DateInformation>
        <S.ArrowsContainer>
          <ArrowUp onClick={handleArrowUpClick} />
          <ArrowDown onClick={handleArrowDownClick} />
        </S.ArrowsContainer>
      </S.CalendarHeader>
      <div>dni tygodnia</div>
      <div>kalendarz</div>
    </S.CalendarContainer>
  );
};

export default Calendar;
