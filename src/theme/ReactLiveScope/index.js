import React from 'react';
import * as Layout from '@fun-eat/design-system';

const DecorativeBox = ({ children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '100px',
      height: '100%',
      minHeight: '75px',
      border: '1px solid #1a211e',
      borderRadius: '4px',
    }}
  >
    {children}
  </div>
);
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  DecorativeBox,
  ...Layout,
};
export default ReactLiveScope;
