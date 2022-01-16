import styled from 'styled-components';

import { WindowSize } from 'types/components/plans/plans.type';

export const PlansBoxContainer = styled.div<WindowSize>`
  --plansBackground: rgb(31, 31, 31);

  position: absolute;
  right: 0;
  height: ${props => props.windowHeight * 0.7}px;
  max-height: 650px;
  width: ${props => props.windowWidth * 0.2}px;
  max-width: 360px;
  border: 1px solid var(--plansBorderColor);
  border-top: none;
  border-right: none;
  background-color: var(--plansBackground);
  transform: translateY(-100%);
  transition: all 0.3s linear;
  visibility: hidden;
  z-index: var(--plans-zIndex);

  &.showPlans.in {
    transform: translateY(var(--taskbarHeight));
    visibility: visible;
  }
`;
