import { WindowSize } from 'types/components/plans/windowSize.type';

const getCurrentWindowSize = (): WindowSize => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  return {
    windowHeight,
    windowWidth,
  };
};

export default getCurrentWindowSize;
