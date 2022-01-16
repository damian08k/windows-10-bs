import { FC } from 'react';

import * as S from './MobileView.styled';

export const MobileViewInfoText =
  "To get this app's full experience, please run it on a desktop (more than 1000px) resolution.";

const MobileView: FC = () => (
  // TODO: Change text inside MobileViewText

  <S.MobileViewContainer>
    <S.MobileViewText data-testid="mobile-view">{MobileViewInfoText}</S.MobileViewText>
  </S.MobileViewContainer>
);

export default MobileView;
