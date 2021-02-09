import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Paper from '..';
import { theme } from '../../../config/helpers';
const defaultContent = 'Text';
const defaultProps = {};
describe('Component: Paper', () => {
    test('snapshots', () => {
        const component = shallow(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(Paper, Object.assign({}, defaultProps), defaultContent)));
        expect(component).toMatchSnapshot();
    });
    test('check props', () => {
        // when
        const mockContent = faker.random.word();
        const component = shallow(React.createElement(Paper, Object.assign({}, defaultProps), mockContent));
        // then
        expect(component.children().text()).toEqual(mockContent);
    });
});
//# sourceMappingURL=paper.spec.js.map