import React from 'react';
import { FormError } from '..';
import { Wrapper, StyledCheckbox } from './styles';
const Checkbox = ({ checked, onChange, label, name, error, }) => (React.createElement(Wrapper, null,
    React.createElement(FormError, { error: error },
        React.createElement(StyledCheckbox, { label: label, name: name, checked: checked, onChange: onChange }))));
export default Checkbox;
//# sourceMappingURL=index.js.map