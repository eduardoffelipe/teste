import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Typography from '..';
import { theme } from '../../../config/helpers';
const defaultContent = 'Text';
const defaultProps = {};
describe('Component: Typography', () => {
    test('snapshots', () => {
        const component = shallow(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(Typography, Object.assign({}, defaultProps), defaultContent)));
        expect(component).toMatchSnapshot();
    });
    test('check props', () => {
        // when
        const mockContent = faker.random.word();
        const component = shallow(React.createElement(Typography, Object.assign({}, defaultProps, { variant: "h1" }), mockContent));
        // then
        const { variant } = component.props();
        expect(variant).toEqual('h1');
        expect(component.children().text()).toEqual(mockContent);
    });
});
//# sourceMappingURL=typography.spec.js.map