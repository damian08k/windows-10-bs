import { FC } from 'react';

import PlansBoxClock from 'Plans/PlansBoxClock/PlansBoxClock';

import * as S from './PlansBoxDate.styled';

const PlansBoxDate: FC = () => {
  return (
    <S.Container>
      <PlansBoxClock />
    </S.Container>
  );
};

export default PlansBoxDate;
