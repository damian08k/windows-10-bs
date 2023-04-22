import { AnimationProps } from 'framer-motion';

export const loaderAnimation = (delay: number): AnimationProps => ({
  initial: {
    rotate: 180,
    opacity: 0,
  },
  animate: {
    rotate: [180, 300, 410, 645, 770, 900, 900, 900],
    opacity: [0, 1, 1, 1, 1, 0.6, 0, 0],
  },
  transition: {
    times: [0, 0.07, 0.3, 0.39, 0.7, 0.75, 0.76, 1],
    duration: 5,
    repeat: Infinity,
    delay: delay,
    ease: ['easeOut', 'linear', 'easeInOut', 'linear', 'easeOut', 'easeOut', 'easeOut'],
  },
});
