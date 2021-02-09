import React from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormError } from '../..';
import { toOnlyNumbers } from '../../../utils/helpers';
import { Bar, Input, Label, Wrapper } from './styles';
const defaultMaskOptions = {
    prefix: 'R$ ',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2,
};
const CurrencyInputComponent = ({ error, label, id, name, onChangeText, value, }) => {
    const currencyMask = createNumberMask(defaultMaskOptions);
    const handleChange = (event) => {
        if (onChangeText && event.target.value) {
            onChangeText(Object.assign(Object.assign({}, event), { target: Object.assign(Object.assign({}, event.target), { value: toOnlyNumbers(event.target.value) }) }));
        }
    };
    return (React.createElement(FormError, { error: error },
        React.createElement(Wrapper, null,
            React.createElement(MaskedInput, { mask: currencyMask, placeholder: "R$ 0,00", id: id, name: name, value: value, onChange: handleChange, render: (ref, props) => React.createElement(Input, Object.assign({ ref: ref, error: error }, props)) }),
            React.createElement(Bar, { className: "bar", error: error }),
            React.createElement(Label, { error: error }, label))));
};
export default CurrencyInputComponent;
//# sourceMappingURL=index.js.map