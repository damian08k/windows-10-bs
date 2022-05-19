import { FC } from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as WindowsLogo } from 'assets/icons/w10-logo.svg';
import useMountTransition from 'hooks/useMountTransition';
import { RootState } from 'types/store/clockState.type';

import Plans from './components/Plans/Plans';
import TimeAndDate from './components/TimeAndDate/TimeAndDate';
import * as S from './Taskbar.styled';

const Taskbar: FC = () => {
  const isPlanOpen = useSelector((state: RootState) => state.togglePlansVisibility.isPlanOpen);
  const hasTransitionedIn = useMountTransition(isPlanOpen, 1000);

  return (
    <S.TaskbarContainer>
      <S.LogoContainer>
        <S.LogoButton>
          <WindowsLogo className="windowsLogo" />
        </S.LogoButton>
      </S.LogoContainer>
      <S.SearchContainer>
        <SearchIcon className="searchIcon" />
        <input className="searchInput" type="text" placeholder="Type here to search" />
      </S.SearchContainer>
      <TimeAndDate />
      {(isPlanOpen || hasTransitionedIn) && (
        <Plans transitionClassName={`${hasTransitionedIn && 'in'} ${isPlanOpen && 'showPlans'}`} />
      )}
    </S.TaskbarContainer>
  );
};

export default Taskbar;
