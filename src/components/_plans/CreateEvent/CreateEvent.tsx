import { FC, KeyboardEvent } from 'react';

import { CreateEventButtons } from './components/CreateEventButtons/CreateEventButtons';
import { Location } from './components/Location/Location';
import { TimePicker } from './components/TimePicker/TimePicker';

type Props = {
  onClickEnter: (evt: KeyboardEvent<HTMLInputElement>) => void;
};

export const CreateEvent: FC<Props> = ({ onClickEnter }) => {
  return (
    <>
      <TimePicker onClickEnter={onClickEnter} />
      <Location onClickEnter={onClickEnter} />
      <CreateEventButtons />
    </>
  );
};
