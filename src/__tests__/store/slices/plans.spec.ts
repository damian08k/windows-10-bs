import reducer, { plansActions } from 'store/slices/plans.slice';

describe('plans slice tests', () => {
  test('should change state to its negative version', () => {
    const initialState = {
      isPlanOpen: false,
      isEventsVisible: true,
    };

    const shouldBeTrueResult = reducer(initialState, plansActions.togglePlansVisibility(true));
    expect(shouldBeTrueResult).toStrictEqual({ isPlanOpen: true, isEventsVisible: true });

    const shouldBeFalseResult = reducer(
      shouldBeTrueResult,
      plansActions.togglePlansVisibility(false),
    );
    expect(shouldBeFalseResult).toStrictEqual({ isPlanOpen: false, isEventsVisible: true });

    const shouldNotChangeCurrentState = reducer(
      shouldBeFalseResult,
      plansActions.togglePlansVisibility(false),
    );
    expect(shouldNotChangeCurrentState).toStrictEqual({
      isPlanOpen: false,
      isEventsVisible: true,
    });
  });
});
