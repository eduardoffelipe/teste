import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Button from '..';
import { theme } from '../../../config/helpers';
const defaultContent = 'Text';
const defaultProps = {
    onPress: jest.fn(),
    children: defaultContent,
};
describe('Component: Button', () => {
    test('snapshots with default props', () => {
        const component = shallow(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(Button, Object.assign({}, defaultProps))));
        expect(component).toMatchSnapshot();
    });
    test('snapshots with loading', () => {
        const component = shallow(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(Button, Object.assign({}, defaultProps, { loading: true }))));
        expect(component).toMatchSnapshot();
    });
    test('snapshots with other props', () => {
        const component = shallow(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(Button, Object.assign({}, defaultProps, { disabled: true, secondary: true, transparent: true }), defaultContent)));
        expect(component).toMatchSnapshot();
    });
    test('check props default props', () => {
        // should
        const typeMock = faker.random.words();
        // when
        const component = shallow(React.createElement(Button, Object.assign({}, defaultProps, { type: typeMock, disabled: true, secondary: true, transparent: true }), defaultContent));
        // then
        const wrapper = component.props();
        const child = component.children();
        expect(wrapper.type).toEqual(typeMock);
        expect(wrapper.secondary).toBeTruthy();
        expect(wrapper.transparent).toBeTruthy();
        expect(child.contains(defaultContent)).toEqual(true);
    });
    test('should call onPress when pressed', () => {
        // should
        const mockFunction = jest.fn();
        const component = shallow(React.createElement(Button, Object.assign({}, defaultProps, { onPress: mockFunction })));
        // when
        expect(mockFunction).not.toHaveBeenCalled();
        component.simulate('click');
        // then
        expect(mockFunction).toHaveBeenCalled();
    });
});
//# sourceMappingURL=button.spec.js.map