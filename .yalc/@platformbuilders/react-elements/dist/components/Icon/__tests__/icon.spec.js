import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Icon from '..';
import { theme } from '../../../config/helpers';
const defaultProps = {
    name: 'any_name',
};
describe('Component: Icon', () => {
    test('snapshots with default props', () => {
        const component = shallow(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(Icon, Object.assign({}, defaultProps))));
        expect(component).toMatchSnapshot();
    });
    test('snapshots with other props', () => {
        const component = shallow(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(Icon, Object.assign({}, defaultProps, { size: "large", color: "primary" }))));
        expect(component).toMatchSnapshot();
    });
    test('check default props', () => {
        // when
        const component = shallow(React.createElement(Icon, Object.assign({}, defaultProps)));
        // then
        const wrapper = component.props();
        const element = component.children().props();
        expect(wrapper.color).toEqual('inherit');
        expect(wrapper.edge).toEqual('start');
        expect(element.color).toEqual('inherit');
        expect(element.fontSize).toEqual('default');
        expect(element.children).toEqual(defaultProps.name);
    });
    test('check props', () => {
        // should
        const sizeMock = 'small';
        const colorMock = 'error';
        // when
        const component = shallow(React.createElement(Icon, Object.assign({}, defaultProps, { size: sizeMock, color: colorMock })));
        // then
        const wrapper = component.props();
        const element = component.children().props();
        expect(wrapper.color).toEqual('inherit');
        expect(wrapper.edge).toEqual('start');
        expect(element.color).toEqual(colorMock);
        expect(element.fontSize).toEqual(sizeMock);
        expect(element.children).toEqual(defaultProps.name);
    });
});
//# sourceMappingURL=icon.spec.js.map