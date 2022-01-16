import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { createRef } from 'react';

import useOutsideClick from 'hooks/useOutsideClick';

describe('useOutsideClick tests', () => {
  test('calls handler when click is outside element', () => {
    const handler = jest.fn();
    const ref = createRef<HTMLDivElement>();
    render(<div ref={ref}></div>);

    renderHook(() => useOutsideClick(ref, handler));
    fireEvent.click(document);

    expect(handler).toBeCalledTimes(1);
  });

  test(`doesn't calls handler when click is within element`, () => {
    const handler = jest.fn();
    const ref = createRef<HTMLDivElement>();
    render(<div ref={ref} data-testid="element-testid"></div>);

    renderHook(() => useOutsideClick(ref, handler));
    fireEvent.click(screen.getByTestId('element-testid'));

    expect(handler).not.toBeCalled();
  });
});
