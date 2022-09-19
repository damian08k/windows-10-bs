import { AnimationProps } from 'framer-motion';

export const circleAnimation: AnimationProps = {
  initial: {
    rotate: 225,
    opacity: 0,
  },
  animate: {
    rotate: [225, 345, 455, 690, 815, 945, 945, 945],
    opacity: [1, 1, 1, 1, 1, 1, 0, 0],
  },
  transition: {
    times: [0, 0.07, 0.3, 0.39, 0.7, 0.75, 0.76, 1],
    duration: 5.5,
    repeat: Infinity,
    delay: 0.2 * Math.random(),
  },
};

// export const parent: AnimationProps = {
//   variants: {
//     init: {
//       opacity: 0,
//     },
//     rot: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.24,
//       },
//     },
//   },
// };
// export const circleAnimation: AnimationProps = {
//   variants: {
//     init: {
//       opacity: 0,
//       rotate: 225,
//     },
//     rot: {
//       rotate: [225, 345, 455, 690, 815, 945, 945, 945],
//       opacity: [1, 1, 1, 1, 1, 1, 0, 0],
//       transition: {
//         duration: 5.5,
//         repeat: Infinity,
//       },
//     },
//   },
//   exit: {
//     opacity: 0,
//     rotate: 945,
//   },
// };
