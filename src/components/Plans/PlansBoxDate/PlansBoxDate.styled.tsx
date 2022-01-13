import styled from 'styled-components';

export const Container = styled.div`
  --plansBoxDateColor: 191, 224, 106;
  --plansBoxDateHoverColor: 165, 165, 165;

  padding: var(--spacing) calc(var(--spacing) * 2) calc(var(--spacing) * 2);
  border-bottom: 1px solid var(--plansBorderColor);

  .plans-box-date {
    font-size: 1.4rem;
    color: rgb(var(--plansBoxDateColor));
    cursor: pointer;

    &:hover {
      color: rgb(var(--plansBoxDateHoverColor));
    }
  }
`;
