import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Touchable from '..';
import { theme } from '../../../config/helpers';
const defaultContent = 'Text';
const defaultProps = {
    onPress: jest.fn(),
};
describe('Component: Touchable', () => {
    test('snapshots', () => {
        const component = shallow(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(Touchable, Object.assign({}, defaultProps), defaultContent)));
        expect(component).toMatchSnapshot();
    });
    test('check props', () => {
        // when
        const mockContent = faker.random.word();
        const component = shallow(React.createElement(Touchable, Object.assign({}, defaultProps), mockContent));
        // then
        expect(component.children().text()).toEqual(mockContent);
    });
    test('should call onPress when clicked', () => {
        // should
        const mockFunction = jest.fn();
        const component = shallow(React.createElement(Touchable, Object.assign({}, defaultProps, { onPress: mockFunction }), defaultContent));
        // when
        expect(mockFunction).not.toHaveBeenCalled();
        component.simulate('click');
        // then
        expect(mockFunction).toHaveBeenCalled();
    });
});
//# sourceMappingURL=touchable.spec.js.map