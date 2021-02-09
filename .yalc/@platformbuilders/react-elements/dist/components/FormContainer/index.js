import { __rest } from "tslib";
import React from 'react';
import { Formik } from 'formik';
const FormContainer = (_a) => {
    var { validateOnChange, validationSchema, initialValues, onSubmit, children } = _a, rest = __rest(_a, ["validateOnChange", "validationSchema", "initialValues", "onSubmit", "children"]);
    return (React.createElement(Formik, Object.assign({ validateOnChange: validateOnChange, validationSchema: validationSchema, initialValues: initialValues, onSubmit: onSubmit }, rest), children));
};
export default FormContainer;
//# sourceMappingURL=index.js.map