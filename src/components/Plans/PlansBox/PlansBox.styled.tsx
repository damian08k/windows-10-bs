import styled from 'styled-components';

import { WindowSize } from 'types/components/plans/plans.type';

export const PlansBoxContainer = styled.div<WindowSize>`
  --plansBackground: rgb(31, 31, 31);

  position: absolute;
  transform: translateY(-100%);
  right: 0;
  height: ${props => props.windowHeight * 0.7}px;
  max-height: 650px;
  width: 350px;
  background-color: var(--plansBackground);
  transition: all 0.3s linear;
  visibility: hidden;
  z-index: var(--plans-zIndex);

  &.showPlans.in {
    transform: translateY(40px);
    visibility: visible;
  }
`;
