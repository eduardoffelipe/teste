import { __rest } from "tslib";
import React from 'react';
import TextInputMask from 'react-input-mask';
import CurrencyInput from './CurrencyInput';
import { Input, InputWrapper } from './styles';
import { FormError } from '..';
var Mask;
(function (Mask) {
    Mask["cep"] = "99999-999";
    Mask["cpf"] = "999.999.999-99";
    Mask["cnpj"] = "99.999.999/9999-99";
    Mask["birthdate"] = "99/99/9999";
    Mask["phone"] = "(99) 9999-9999";
    Mask["cellphone"] = "(99) 99999-9999";
})(Mask || (Mask = {}));
const TextInput = (_a) => {
    var { mask, maskType = '', error = '', onChange, maxlength } = _a, rest = __rest(_a, ["mask", "maskType", "error", "onChange", "maxlength"]);
    const renderTextInput = () => {
        const hasMask = mask || maskType;
        const maskOption = Mask[maskType] || mask;
        return maskType === 'currency' ? (React.createElement(CurrencyInput, Object.assign({}, rest, { onChangeText: onChange }))) : hasMask ? (React.createElement(TextInputMask, Object.assign({ mask: maskOption, onChange: onChange }, rest), (inputProps) => (React.createElement(Input, Object.assign({ margin: "normal" }, inputProps, { inputProps: { maxLength: maxlength } }))))) : (React.createElement(Input, Object.assign({}, rest, { margin: "normal", onChange: onChange, error: !!error, inputProps: { maxLength: maxlength } })));
    };
    return (React.createElement(InputWrapper, Object.assign({}, rest),
        React.createElement(FormError, { error: error }, renderTextInput())));
};
export default TextInput;
//# sourceMappingURL=index.js.map