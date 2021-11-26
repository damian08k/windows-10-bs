import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 var(--spacing) 0 auto;
  padding: 0 var(--spacing);
  width: 90px;
  font-size: 1.6rem;
  text-align: center;
  color: rgb(var(--white));

  &:hover {
    background-color: var(--hover);
    cursor: pointer;
  }

  &[data-title]:hover:after {
    opacity: 1;
    transition: all 0.2s linear 0.5s;
    visibility: visible;
  }

  &[data-title]:after {
    content: attr(data-title);
    padding: calc(var(--spacing) / 5) calc(var(--spacing) / 2);
    position: absolute;
    top: 100%;
    right: 0;
    border: 1px solid var(--grey);
    font-size: 1.3rem;
    white-space: nowrap;
    background-color: rgb(var(--white));
    color: rgb(var(--black));
    opacity: 0;
    z-index: var(--menu-zIndex);
    visibility: hidden;
  }

  &[data-title] {
    position: relative;
  }
`;
