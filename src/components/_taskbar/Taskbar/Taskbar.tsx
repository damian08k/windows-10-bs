import useMountTransition from 'hooks/useMountTransition';

import { useAppSelector } from 'store/hooks';

import Plans from '_plans/Plans/Plans';
import TimeAndDate from '_taskbar/TimeAndDate/TimeAndDate';

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as WindowsLogo } from 'assets/icons/w10-logo.svg';

import classes from './Taskbar.module.css';

const Taskbar = () => {
  const isPlanOpen = useAppSelector(state => state.plans.isPlanOpen);
  const hasTransitionedIn = useMountTransition(isPlanOpen, 1000);

  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <button className={classes.logoButton} aria-label="Open windows application menu">
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
