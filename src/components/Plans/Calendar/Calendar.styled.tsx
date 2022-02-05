import styled from 'styled-components';

import { DayName } from 'types/components/calendar/dayName.enum';

const { PREVIOUS_MONTH_DAY, CURRENT_MONTH_DAY, NEXT_MONTH_DAY } = DayName;

export const CalendarContainer = styled.div`
  padding: var(--spacing) calc(var(--spacing) * 2) calc(var(--spacing) * 2);
  border-bottom: 1px solid var(--plansBorderColor);
  font-size: 1.5rem;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: calc(var(--spacing) * 2);

  & > * {
    flex-basis: 40%;
  }
`;

export const DateInformation = styled.div`
  display: flex;
  gap: 5%;

  .month {
    text-transform: lowercase;
  }
`;

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10%;

  & > * {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const WeekDays = styled.div`
  display: flex;
  padding-bottom: var(--spacing);
  text-transform: lowercase;
  text-align: center;

  & > * {
    flex-basis: calc(100% / 7);
  }
`;

export const Days = styled.div`
  --dayHoverBorder: rgb(121, 121, 121);
  --notCurrentMonthDay: rgb(93, 93, 93);

  display: flex;
  flex-wrap: wrap;

  .day {
    width: calc(100% / 7);
    line-height: 35px;
    border: 2px solid transparent;
    text-align: center;

    &:hover {
      border-color: var(--dayHoverBorder);
    }
  }

  .${PREVIOUS_MONTH_DAY}, .${NEXT_MONTH_DAY} {
    color: var(--notCurrentMonthDay);
  }
`;
