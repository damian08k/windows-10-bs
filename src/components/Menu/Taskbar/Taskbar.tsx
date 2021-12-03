import { FC } from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as WindowsLogo } from 'assets/icons/w10-logo.svg';
import useMountTransition from 'hooks/useMountTransition';
import PlansBox from 'Plans/PlansBox/PlansBox';
import { RootState } from 'types/store/clockState.type';

import TimeAndDate from '../TimeAndDate/TimeAndDate';

import { TaskbarContainer, LogoContainer, SearchContainer, LogoButton } from './Taskbar.styled';

const Taskbar: FC = () => {
  const isPlanOpen = useSelector((state: RootState) => state.togglePlansVisibility.isPlanOpen);
  const hasTransitionedIn = useMountTransition(isPlanOpen, 1000);

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
      {(isPlanOpen || hasTransitionedIn) && (
        <PlansBox
          transitionClassName={`${hasTransitionedIn && 'in'} ${isPlanOpen && 'showPlans'}`}
        />
      )}
    </TaskbarContainer>
  );
};

export default Taskbar;
