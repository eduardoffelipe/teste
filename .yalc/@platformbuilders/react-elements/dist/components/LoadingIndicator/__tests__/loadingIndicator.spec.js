import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../config/helpers';
import LoadingIndicator, { Sizes } from '../index';
const defaultProps = {};
describe('Component: LoadingIndicator', () => {
    test('snapshots', () => {
        const component = shallow(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(LoadingIndicator, Object.assign({}, defaultProps))));
        expect(component).toMatchSnapshot();
    });
    test('check props default props', () => {
        // when
        const component = shallow(React.createElement(LoadingIndicator, Object.assign({}, defaultProps)));
        // then
        const { width, height, isStopped, isPaused } = component.props();
        expect(width).toEqual(Sizes.medium);
        expect(height).toEqual(Sizes.medium);
        expect(isStopped).toBeFalsy();
        expect(isPaused).toBeFalsy();
    });
    test('check props with size', () => {
        // when
        const component = shallow(React.createElement(LoadingIndicator, Object.assign({}, defaultProps, { size: "small" })));
        // then
        const { width, height } = component.props();
        expect(width).toEqual(Sizes.small);
        expect(height).toEqual(Sizes.small);
    });
});
//# sourceMappingURL=loadingIndicator.spec.js.map