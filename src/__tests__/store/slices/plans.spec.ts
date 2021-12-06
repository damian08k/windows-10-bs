import reducer, { plansActions } from 'store/slices/plans.slice';

describe('plans slice tests', () => {
  test('should return initial state', () => {
    const initialState = {
      isPlanOpen: false,
    };

    const result = reducer(undefined, { type: undefined });

    expect(result).toStrictEqual(initialState);
  });

  test('should change state to its negative version', () => {
    const initialState = {
      isPlanOpen: false,
    };

    const shouldBeTrueResult = reducer(initialState, plansActions.togglePlansVisibility(true));
    expect(shouldBeTrueResult).toStrictEqual({ isPlanOpen: true });

    const shouldBeFalseResult = reducer(
      shouldBeTrueResult,
      plansActions.togglePlansVisibility(false),
    );
    expect(shouldBeFalseResult).toStrictEqual({ isPlanOpen: false });

    const shouldNotChangeCurrentState = reducer(
      shouldBeFalseResult,
      plansActions.togglePlansVisibility(false),
    );
    expect(shouldNotChangeCurrentState).toStrictEqual({ isPlanOpen: false });
  });
});
