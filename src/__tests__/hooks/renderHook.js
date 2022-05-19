// ! Temporary before @testing-library/react-hook will not be update to support react 18

import { render } from '@testing-library/react';
import React from 'react';

export function renderHook(renderCallback, options = {}) {
  const { initialProps, wrapper } = options;
  const result = React.createRef();

  function TestComponent({ renderCallbackProps }) {
    const pendingResult = renderCallback(renderCallbackProps);

    React.useEffect(() => {
      result.current = pendingResult;
    });

    return null;
  }

  const { rerender: baseRerender, unmount } = render(
    <TestComponent renderCallbackProps={initialProps} />,
    { wrapper },
  );

  function rerender(rerenderCallbackProps) {
    return baseRerender(<TestComponent renderCallbackProps={rerenderCallbackProps} />);
  }

  return { result, rerender, unmount };
}
