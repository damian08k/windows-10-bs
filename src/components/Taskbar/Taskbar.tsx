import searchIcon from '../../assets/icons/search.svg';
import w10Logo from '../../assets/icons/w10-logo.svg';

import {
  TaskbarContainer,
  LogoContainer,
  SearchContainer,
  SearchIcon,
  LogoButton,
} from './StyledComponents';

const Taskbar = () => {
  return (
    <TaskbarContainer>
      <LogoContainer>
        <LogoButton>
          <img className="w10Logo" src={w10Logo} alt="Windows 10 logo" />
        </LogoButton>
      </LogoContainer>
      <SearchContainer>
        <SearchIcon>
          <img src={searchIcon} />
        </SearchIcon>
        <input className="searchInput" type="text" placeholder="Type here to search" />
      </SearchContainer>
    </TaskbarContainer>
  );
};

export default Taskbar;
