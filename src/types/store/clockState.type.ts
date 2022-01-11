import store from 'store/store';

export type Time = string;

export type ClockState = {
  time: Time | null;
  timeWithSeconds?: Time | null;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
