/** @jsxRuntime classic */
/** @jsx jsx */
import user from '../user.svg';
import { jsx, css } from '@emotion/react';

export const UserIcon = () => (
  <img
    src={user}
    alt="User"
    css={css`
      width: 12px;
      opacity: 0.6;
    `}
  />
);
