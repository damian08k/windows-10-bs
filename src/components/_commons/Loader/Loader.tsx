import { motion } from 'framer-motion';

import { loaderAnimation } from './animations/loaderAnimation';

import classes from './Loader.module.css';

const ANIMATION_DELAY_VALUE = 0.24;

export const Loader = () => {
  return (
    <div className={classes.root}>
      <motion.div className={classes.dot} {...loaderAnimation(0)} />
      <motion.div className={classes.dot} {...loaderAnimation(ANIMATION_DELAY_VALUE)} />
      <motion.div className={classes.dot} {...loaderAnimation(ANIMATION_DELAY_VALUE * 2)} />
      <motion.div className={classes.dot} {...loaderAnimation(ANIMATION_DELAY_VALUE * 3)} />
      <motion.div className={classes.dot} {...loaderAnimation(ANIMATION_DELAY_VALUE * 4)} />
    </div>
  );
};
