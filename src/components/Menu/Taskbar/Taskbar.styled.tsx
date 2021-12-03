import styled from 'styled-components';

export const TaskbarContainer = styled.div`
  --taskbar-color: rgb(16, 16, 16);
  --taskbar-verticalSpacing: calc(var(--spacing) / 2);

  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--taskbarHeight);
  background-color: var(--taskbar-color);
  z-index: var(--menu-zIndex);
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
`;

export const LogoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;  
  border: none;
  background-color: rgb(var(--black));
  cursor: pointer;

  .windowsLogo {
    height: 70%;
  }

  &:hover {
    background-color: var(--hover);

    .windowsLogo {
      fill: rgb(var(--windowsGreen));
    }`;

export const SearchContainer = styled.div`
  --leftInput-spacing: calc(var(--spacing) * 3.7);

  position: relative;
  width: 350px;

  .searchInput {
    padding: var(--taskbar-verticalSpacing) var(--spacing) var(--taskbar-verticalSpacing)
      var(--leftInput-spacing);
    width: 100%;
    height: 100%;
    font-size: 1.6rem;

    &:hover {
      border-color: var(--grey);
    }
  }

  .searchIcon {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
  }
`;
