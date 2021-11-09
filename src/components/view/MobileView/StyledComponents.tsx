import styled from 'styled-components';

export const MobileViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--black);
  overflow: hidden;
`;

export const MobileViewText = styled.h1`
  padding: 0 calc(var(--spacing) * 5);
  text-align: center;
  color: var(--white);
`;
