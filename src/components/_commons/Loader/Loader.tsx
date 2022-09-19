import { motion } from 'framer-motion';
import { FC } from 'react';

import { circleAnimation } from '_commons/Button/animations/circleAnimation';

import classes from './Loader.module.css';

const Loader: FC = () => {
  return (
    <motion.div className={classes.root}>
      <motion.div className={classes.dot} {...circleAnimation} />
      <motion.div className={classes.dot} {...circleAnimation} />
      <motion.div className={classes.dot} {...circleAnimation} />
      <motion.div className={classes.dot} {...circleAnimation} />
      <motion.div className={classes.dot} {...circleAnimation} />
    </motion.div>
  );
};

export default Loader;
