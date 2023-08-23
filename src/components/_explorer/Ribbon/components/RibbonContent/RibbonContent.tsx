import { shallowEqual } from 'react-redux';

import { useAppSelector } from 'store/hooks';
import { getSelectedRibbonOption } from 'store/slices/explorer.slice';

import classes from './RibbonContent.module.css';

export const RibbonContent = () => {
  const selectedOption = useAppSelector(getSelectedRibbonOption, shallowEqual);

  return <div className={classes.root}>{selectedOption?.option}</div>;
};
