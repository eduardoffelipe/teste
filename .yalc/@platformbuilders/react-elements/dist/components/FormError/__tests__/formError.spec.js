import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import FormError from '..';
import { theme } from '../../../config/helpers';
const defaultContent = 'Text';
const defaultProps = {
    error: undefined,
};
describe('Component: FormError', () => {
    test('snapshots with default props', () => {
        const component = shallow(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(FormError, Object.assign({}, defaultProps), defaultContent)));
        expect(component).toMatchSnapshot();
    });
    test('snapshots with error props', () => {
        const component = shallow(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(FormError, Object.assign({}, defaultProps, { error: "Error text" }), defaultContent)));
        expect(component).toMatchSnapshot();
    });
    test('should render the component when the condition is truthy', () => {
        const errorMock = faker.random.words(10);
        const component = shallow(React.createElement(FormError, Object.assign({}, defaultProps, { error: errorMock }), defaultContent));
        expect(component.contains(defaultContent)).toEqual(true);
    });
});
//# sourceMappingURL=formError.spec.js.map