import { FC } from 'react';
import { useSelector } from 'react-redux';

import Plans from './components/Plans/Plans';
import TimeAndDate from './components/TimeAndDate/TimeAndDate';

import useMountTransition from 'hooks/useMountTransition';

import { RootState } from 'types/store/store.type';

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as WindowsLogo } from 'assets/icons/w10-logo.svg';

import classes from './Taskbar.module.css';

const Taskbar: FC = () => {
  const isPlanOpen = useSelector((state: RootState) => state.plans.isPlanOpen);
  const hasTransitionedIn = useMountTransition(isPlanOpen, 1000);

  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <button className={classes.logoButton}>
          <WindowsLogo className={classes.windowsLogo} />
        </button>
      </div>
      <div className={classes.searchContainer}>
        <SearchIcon className={classes.searchIcon} />
        <input className={classes.searchInput} type="text" placeholder="Type here to search" />
      </div>
      <TimeAndDate />
      {(isPlanOpen || hasTransitionedIn) && (
        <Plans transitionClassName={`${hasTransitionedIn && 'in'} ${isPlanOpen && 'showPlans'}`} />
      )}
    </div>
  );
};

export default Taskbar;
