import React from 'react';
import styled from 'styled-components';
import { Button, CircularProgress } from '@material-ui/core';
import { getTheme } from '../../utils/helpers';
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const secondaryMain = getTheme('secondary.main');
const secondaryContrast = getTheme('secondary.contrast');
export const StyledButton = styled((props) => (React.createElement(Button, Object.assign({}, props, { secondary: undefined })))) `
  min-width: 155px;
  border-radius: 50px;
  padding: 12px;
  color: ${(props) => props.secondary ? secondaryContrast(props) : primaryContrast(props)};
  border: 0;
  background: ${(props) => props.secondary ? secondaryMain(props) : primaryMain(props)};
  :hover {
    background: ${(props) => props.secondary ? secondaryMain(props) : primaryMain(props)};
  }
`;
export const LoadingIndicator = styled((props) => (React.createElement(CircularProgress, Object.assign({}, props, { secondary: undefined, size: 20 })))) `
  color: ${(props) => props.secondary ? secondaryContrast(props) : primaryContrast(props)};
`;
//# sourceMappingURL=styles.js.map