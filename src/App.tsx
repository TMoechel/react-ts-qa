/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import React from 'react';
import Header from './components/Header';
import { HomePage } from './components/HomePage';
import { fontFamily, fontSize, gray2 } from './styles';

const App: React.FC = () => {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
