import styled from 'styled-components';

export const CalendarContainer = styled.div`
  padding: var(--spacing) calc(var(--spacing) * 2) calc(var(--spacing) * 2);
  border-bottom: 1px solid var(--plansBorderColor);
  font-size: 1.5rem;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: var(--spacing);

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
