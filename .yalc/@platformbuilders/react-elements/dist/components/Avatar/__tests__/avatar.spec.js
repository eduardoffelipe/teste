import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Avatar from '..';
import { theme } from '../../../config/helpers';
const defaultProps = {
    src: 'some_url',
    onPress: jest.fn(),
};
describe('Component: Avatar', () => {
    test('snapshots with default props', () => {
        const component = shallow(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(Avatar, Object.assign({}, defaultProps))));
        expect(component).toMatchSnapshot();
    });
    test('snapshots with other props', () => {
        const component = shallow(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(Avatar, Object.assign({}, defaultProps, { alt: "alt text", variant: "square" }))));
        expect(component).toMatchSnapshot();
    });
    test('check props', () => {
        // should
        const altMock = faker.random.words();
        const srcMock = faker.random.words();
        const variantMock = 'rounded';
        // when
        const component = shallow(React.createElement(Avatar, Object.assign({}, defaultProps, { src: srcMock, alt: altMock, variant: variantMock })));
        // then
        const { src, alt, variant } = component.props();
        expect(src).toEqual(srcMock);
        expect(alt).toEqual(altMock);
        expect(variant).toEqual(variantMock);
    });
    test('should call onPress when pressed', () => {
        // should
        const mockFunction = jest.fn();
        const newProps = Object.assign(Object.assign({}, defaultProps), { size: '20' });
        const component = shallow(React.createElement(Avatar, Object.assign({}, newProps, { onPress: mockFunction })));
        // when
        component.simulate('press');
        // then
        expect(mockFunction).toHaveBeenCalled();
    });
});
//# sourceMappingURL=avatar.spec.js.map