import { FC } from 'react';

import Taskbar from '../../Taskbar/Taskbar';

import { DesktopViewContainer } from './DesktopView.styled';

const DesktopView: FC = () => {
  return (
    <>
      <DesktopViewContainer data-testid="desktop-view">
        <Taskbar />
      </DesktopViewContainer>
    </>
  );
};

export default DesktopView;
