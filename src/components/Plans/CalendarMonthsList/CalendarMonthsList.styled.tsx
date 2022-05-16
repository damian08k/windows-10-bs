import styled from 'styled-components';

export const MonthsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .month {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 33%;
    height: 50px;

    &:hover {
      background-color: rgb(var(--windowsGreen));
      border: 1px solid var(--plansBorderColor);
    }
  }
`;
