import React, { PropsWithChildren } from 'react';

export const AnimatePresence = ({ children }: PropsWithChildren) => (
  <div className="mocked-framer-motion-AnimatePresence">{children}</div>
);

export const motion = {
  div: ({ children }: PropsWithChildren) => (
    <div className="mocked-framer-motion-div">{children}</div>
  ),
};
