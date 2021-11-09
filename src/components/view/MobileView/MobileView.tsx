import { FC } from 'react';

import { MobileViewContainer, MobileViewText } from './StyledComponents';

const MobileView: FC = () => (
  // TODO: Change text inside MobileViewText

  <MobileViewContainer>
    <MobileViewText>
      To get this app's full experience, please run it on a desktop (more than 1000px) resolution.
    </MobileViewText>
  </MobileViewContainer>
);

export default MobileView;
