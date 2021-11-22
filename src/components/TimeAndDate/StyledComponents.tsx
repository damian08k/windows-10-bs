import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 var(--spacing) 0 auto;
  width: 70px;
  font-size: 1.6rem;
  text-align: center;
  color: rgb(var(--white));

  &:hover {
    background-color: var(--hover);
    cursor: pointer;
  }
`;
