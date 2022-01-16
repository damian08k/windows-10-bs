import { FC } from 'react';

import Taskbar from 'Menu/Taskbar/Taskbar';

import * as S from './DesktopView.styled';

const DesktopView: FC = () => {
  return (
    <>
      <S.DesktopViewContainer data-testid="desktop-view">
        <Taskbar />
      </S.DesktopViewContainer>
    </>
  );
};

export default DesktopView;
