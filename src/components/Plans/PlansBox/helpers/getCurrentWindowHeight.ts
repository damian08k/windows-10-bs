import { WindowSize } from 'types/components/plans/plans.type';

const getCurrentWindowSize = (): WindowSize => {
  const windowHeight = window.innerHeight;

  return {
    windowHeight,
  };
};

export default getCurrentWindowSize;
