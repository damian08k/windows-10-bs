import { renderHook } from '@testing-library/react';

import { useMountTransition } from 'hooks/useMountTransition';

describe('useMountTransition hook', () => {
  it('should return true if transition is handling', () => {
    const hookResult = renderHook(() => useMountTransition(true, 0));

    expect(hookResult.result.current).toBeTruthy();
  });

  test('hook should return false if transition is not longer handling', () => {
    const hookResult = renderHook(() => useMountTransition(false, 0));
    expect(hookResult.result.current).not.toBeTruthy();
  });
});
