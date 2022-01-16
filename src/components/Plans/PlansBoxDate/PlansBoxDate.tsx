import { FC } from 'react';

import PlansBoxClock from 'Plans/PlansBoxClock/PlansBoxClock';
import getCurrentDate from 'utils/getCurrentDate';

import * as S from './PlansBoxDate.styled';

const PlansBoxDate: FC = () => {
  const { currentDateNamesFormat } = getCurrentDate();
  return (
    <S.Container>
      <PlansBoxClock />
      <div className="plans-box-date">{currentDateNamesFormat}</div>
    </S.Container>
  );
};

export default PlansBoxDate;
