import { FC } from 'react';

import { MobileViewContainer, MobileViewText } from './StyledComponents';

export const MobileViewInfoText =
  "To get this app's full experience, please run it on a desktop (more than 1000px) resolution.";

const MobileView: FC = () => (
  // TODO: Change text inside MobileViewText

  <MobileViewContainer>
    <MobileViewText data-testid="mobile-view">{MobileViewInfoText}</MobileViewText>
  </MobileViewContainer>
);

export default MobileView;
