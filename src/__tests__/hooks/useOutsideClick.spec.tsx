import { fireEvent, render, screen, renderHook } from '@testing-library/react';
import { createRef } from 'react';

import { useOutsideClick } from 'hooks/useOutsideClick';

describe('useOutsideClick tests', () => {
  test('calls handler when click is outside element', () => {
    const handler = jest.fn();
    const ref = createRef<HTMLDivElement>();
    render(<div ref={ref}></div>);

    renderHook(() => useOutsideClick(ref, handler));
    fireEvent.mouseDown(document);

    expect(handler).toBeCalledTimes(1);
  });

  test(`doesn't calls handler when click is within element`, () => {
    const handler = jest.fn();
    const ref = createRef<HTMLDivElement>();
    render(<div ref={ref} data-testid="element-testid"></div>);

    renderHook(() => useOutsideClick(ref, handler));
    fireEvent.mouseDown(screen.getByTestId('element-testid'));

    expect(handler).not.toBeCalled();
  });
});
