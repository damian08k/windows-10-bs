import { FC } from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow_up.svg';
import { currentDateActions } from 'store/slices/currentDate.slice';
import { useAppDispatch } from 'store/store';
import { RootState } from 'types/store/store.type';

import classes from './Arrows.module.css';

type Props = {
  isMonthsView: boolean;
};

const Arrows: FC<Props> = ({ isMonthsView }) => {
  const { month, year } = useSelector((state: RootState) => state.currentDate);

  const dispatch = useAppDispatch();

  const handleArrowDownClick = () => {
    if (isMonthsView) {
      dispatch(currentDateActions.updateMonthAndYear({ month: null, year: year + 1 }));
    } else {
      dispatch(currentDateActions.updateMonthAndYear({ month: (month as number) + 1 }));
    }
  };

  const handleArrowUpClick = () => {
    if (isMonthsView) {
      dispatch(currentDateActions.updateMonthAndYear({ month: null, year: year - 1 }));
    } else {
      dispatch(currentDateActions.updateMonthAndYear({ month: (month as number) - 1 }));
    }
  };
  return (
    <div className={classes.root}>
      <ArrowUp onClick={handleArrowUpClick} className={classes.arrow} />
      <ArrowDown onClick={handleArrowDownClick} className={classes.arrow} />
    </div>
  );
};

export default Arrows;
