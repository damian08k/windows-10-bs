import { FC } from 'react';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow_up.svg';

import * as S from './Calendar.styled';
import getDateElements from './helpers/getDateElements';
import getWeekDays from './helpers/getWeekDays';

const Calendar: FC = () => {
  const { month, year } = getDateElements();
  const weekDays = getWeekDays();

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
      <S.WeekDays>
        {weekDays.map(day => (
          <p key={day}>{day}</p>
        ))}
      </S.WeekDays>
      <div>kalendarz</div>
    </S.CalendarContainer>
  );
};

export default Calendar;
