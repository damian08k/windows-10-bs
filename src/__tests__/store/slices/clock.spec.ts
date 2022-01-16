import reducer, { clockActions } from 'store/slices/clock.slice';

describe('updateClock reducer tests', () => {
  test('should return initial state', () => {
    const initialState = {
      time: new Date().toLocaleTimeString(),
    };

    const result = reducer(undefined, { type: undefined });

    expect(result).toStrictEqual(initialState);
  });

  test('should add to state value exactly one minute', () => {
    const currentState = {
      time: '18:31',
    };

    const result = reducer(currentState, clockActions.updateClock('18:32'));

    expect(result).toStrictEqual({ time: '18:32' });
  });
});
