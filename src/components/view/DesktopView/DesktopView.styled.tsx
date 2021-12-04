import styled from 'styled-components';

import defaultWallpaper from '../../../assets/wallpapers/w10_default.jpg';

export const DesktopViewContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${defaultWallpaper});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: var(--desktop-zIndex);
`;
