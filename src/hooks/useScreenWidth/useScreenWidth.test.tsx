import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { useScreenWidth } from '../../hooks/useScreenWidth';

const fireResizeEvent = (screenWidth: number): void => {
  global.innerWidth = screenWidth;
  global.dispatchEvent(new Event('resize'));
};

const EffectComponent = () => {
  const width = useScreenWidth();
  return <span>{width}</span>;
};

test('if useScreenWidth listen to window resize and setting screen width to current screen size', () => {
  const { container, rerender } = render(<EffectComponent />);
  const spanElement = container.firstChild;

  act(() => fireResizeEvent(320));
  rerender(<EffectComponent />);
  expect(spanElement?.textContent).toBe('320');

  act(() => fireResizeEvent(1200));
  rerender(<EffectComponent />);
  expect(spanElement?.textContent).toBe('1200');
});
