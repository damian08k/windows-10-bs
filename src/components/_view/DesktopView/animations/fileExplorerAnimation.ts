import { AnimationProps } from 'framer-motion';

export const fileExplorerAnimation: AnimationProps = {
  initial: { scale: 0, translateX: '-50%', translateY: '-50%' },
  animate: { scale: 1 },
  transition: {
    duration: 0.2,
    ease: 'linear',
  },
};
