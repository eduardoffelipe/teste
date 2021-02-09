import { __rest } from "tslib";
import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import { Wrapper, MaterialSelect, Item } from './styles';
const Select = (_a) => {
    var { onChange, error = '', label = '', selectedValue, values } = _a, rest = __rest(_a, ["onChange", "error", "label", "selectedValue", "values"]);
    return (React.createElement(Wrapper, Object.assign({ error: error !== '' }, rest),
        React.createElement(InputLabel, null, label),
        React.createElement(MaterialSelect, Object.assign({ value: selectedValue, onChange: (event) => onChange(event.target.value) }, rest), values.map((item) => (React.createElement(Item, Object.assign({ key: item.value, value: item.value }, rest), item.label)))),
        React.createElement(FormHelperText, null, error)));
};
export default Select;
//# sourceMappingURL=index.js.map