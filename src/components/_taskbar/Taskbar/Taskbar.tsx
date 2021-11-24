import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as WindowsLogo } from '../../assets/icons/w10-logo.svg';
import TimeAndDate from '../TimeAndDate/TimeAndDate';

import { TaskbarContainer, LogoContainer, SearchContainer, LogoButton } from './Taskbar.styled';

const Taskbar = () => {
  return (
    <TaskbarContainer>
      <LogoContainer>
        <LogoButton>
          <WindowsLogo className="windowsLogo" />
        </LogoButton>
      </LogoContainer>
      <SearchContainer>
        <SearchIcon className="searchIcon" />
        <input className="searchInput" type="text" placeholder="Type here to search" />
      </SearchContainer>
      <TimeAndDate />
    </TaskbarContainer>
  );
};

export default Taskbar;
