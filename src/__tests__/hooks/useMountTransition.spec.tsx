import { renderHook } from '@testing-library/react-hooks';

import useMountTransition from 'hooks/useMountTransition';

describe('useMountTransition hook tests', () => {
  test('hook should return true as transition is handling', () => {
    const hookResult = renderHook(() => useMountTransition(true, 0));
    expect(hookResult.result.current).toBeTruthy();
  });

  test('hook should return false as transition is not longer handling', () => {
    const hookResult = renderHook(() => useMountTransition(false, 0));
    expect(hookResult.result.current).not.toBeTruthy();
  });
});
