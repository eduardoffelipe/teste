'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components/native');
var reactNativeSizeMatters = require('react-native-size-matters');
var helpers = require('@platformbuilders/helpers');
var Haptic = require('react-native-haptic');
var reactNative = require('react-native');
var reactNativeResponsiveFontsize = require('react-native-responsive-fontsize');
var lodash = require('lodash');
var reactNativeMaskedText = require('react-native-masked-text');
var MaterialIcons = require('react-native-vector-icons/MaterialCommunityIcons');
var Svg = require('react-native-svg');
var styledComponents = require('styled-components');
var DefaultCodeInput = require('react-native-smooth-pincode-input');
var Animation = require('lottie-react-native');
var DefaultCheckbox = require('react-native-check-box');
var polished = require('polished');
var reactNativeIphoneXHelper = require('react-native-iphone-x-helper');
var DefaultDatePicker = require('react-native-datepicker');
var reactNativeCamera = require('react-native-camera');
var FastImage = require('react-native-fast-image');
var ImagePicker = require('react-native-image-picker');
var Accordion = require('react-native-collapsible/Accordion');
var Markdown = require('react-native-markdown-display');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var Haptic__default = /*#__PURE__*/_interopDefaultLegacy(Haptic);
var MaterialIcons__default = /*#__PURE__*/_interopDefaultLegacy(MaterialIcons);
var Svg__default = /*#__PURE__*/_interopDefaultLegacy(Svg);
var DefaultCodeInput__default = /*#__PURE__*/_interopDefaultLegacy(DefaultCodeInput);
var Animation__default = /*#__PURE__*/_interopDefaultLegacy(Animation);
var DefaultCheckbox__default = /*#__PURE__*/_interopDefaultLegacy(DefaultCheckbox);
var DefaultDatePicker__default = /*#__PURE__*/_interopDefaultLegacy(DefaultDatePicker);
var FastImage__default = /*#__PURE__*/_interopDefaultLegacy(FastImage);
var ImagePicker__default = /*#__PURE__*/_interopDefaultLegacy(ImagePicker);
var Accordion__default = /*#__PURE__*/_interopDefaultLegacy(Accordion);
var Markdown__default = /*#__PURE__*/_interopDefaultLegacy(Markdown);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const IOS_PLATFORM = 'ios';
const isIOS = () => reactNative.Platform.OS === IOS_PLATFORM;

const generateHaptic = (haptic = 'impact') => {
    if (isIOS()) {
        Haptic__default['default'].generate(haptic);
    }
};

const scaledFontSize = (size, baselineFactor) => {
    const value = typeof size === 'string' ? parseInt(size, 10) : size;
    return reactNativeResponsiveFontsize.RFValue(value, baselineFactor);
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const getFontSize = (props) => scaledFontSize(helpers.getTheme(`${props.variant}.fontSize`)(props));
const getLineHeight = (props) => scaledFontSize(helpers.getTheme(`${props.variant}.lineHeight`)(props));

const shadowRadius = `${reactNativeSizeMatters.moderateScale(4)}px`;
const getShadow = () => `
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: ${shadowRadius};
  elevation: 3;
`;

const Text = styled__default['default'].Text `
  color: ${helpers.getTheme('text')};
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
`;

const Typography = (_a) => {
    var { style = [{}], textRef = React__default['default'].createRef(), variant = 'body', children, id, accessibility } = _a, rest = __rest(_a, ["style", "textRef", "variant", "children", "id", "accessibility"]);
    return (React__default['default'].createElement(Text, Object.assign({ testID: id, accessibilityLabel: accessibility, ref: textRef, style: style, variant: variant }, rest), children));
};

const isCentered = helpers.ifStyle('centered');
const isLarge = helpers.ifStyle('large');
const ErrorText = styled__default['default'](Typography).attrs((props) => ({
    variant: isLarge('footnote', 'caption2')(props),
})) `
  color: ${helpers.getTheme('failure')};
  text-align: ${isCentered('center', 'left')};
  margin-top: ${isLarge(0, reactNativeSizeMatters.moderateScale(1))}px;
`;

const warnBoolean = () => 
// eslint-disable-next-line no-console
console.warn(`@platformbuilders/react-native-ui: received a truthy boolean error instead of string, which won't be rendered.`);
const FormError = (_a) => {
    var { id = 'form_error', accessibility, error = '', centered = false, large = false, children } = _a, rest = __rest(_a, ["id", "accessibility", "error", "centered", "large", "children"]);
    if (error && typeof error === 'boolean')
        warnBoolean();
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        children,
        error && typeof error === 'string' ? (React__default['default'].createElement(ErrorText, Object.assign({ centered: centered, large: large, testID: `error_${id}`, accessibilityLabel: `Erro ${accessibility || error}` }, rest), error)) : null));
};

const usePrevious = (value) => {
    const ref = React.useRef();
    React.useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

(function (InputStatus) {
    InputStatus["Success"] = "SUCCESS";
    InputStatus["Failure"] = "FAILURE";
    InputStatus["Default"] = "DEFAULT";
    InputStatus["Disabled"] = "DISABLED";
})(exports.InputStatus || (exports.InputStatus = {}));

const CommonTouchable = (_a) => {
    var { onPress = () => { }, haptic = 'impact', disabled = false, accessibility, id } = _a, rest = __rest(_a, ["onPress", "haptic", "disabled", "accessibility", "id"]);
    return (React__default['default'].createElement(reactNative.TouchableOpacity, Object.assign({}, rest, { accessibilityLabel: accessibility, testID: id, disabled: disabled, onPress: (e) => {
            generateHaptic(haptic);
            onPress(e);
        } })));
};

const Profile = ({ color = '#212121', width = 18, height = 18 }) => (React__default['default'].createElement(Svg__default['default'], { width: width, height: height, viewBox: "0 0 16 16", fill: "none" },
    React__default['default'].createElement(Svg.Path, { d: "M7.97371 8.97934C10.3383 8.97934 12.2561 6.96553 12.2561 4.48278C12.2561 2.00003 10.3382 0 7.97371 0C5.60919 0 3.69128 2.01381 3.69128 4.48278C3.69128 6.95176 5.60917 8.97934 7.97371 8.97934ZM7.97371 1.17242C9.70769 1.17242 11.1264 2.66207 11.1264 4.48278C11.1264 6.3035 9.70769 7.79312 7.97371 7.79312C6.23973 7.79312 4.82099 6.30347 4.82099 4.48275C4.82099 2.66204 6.2397 1.17242 7.97371 1.17242Z", fill: color }),
    React__default['default'].createElement(Svg.Path, { d: "M0.564855 16H15.4351C15.7504 16 16 15.7379 16 15.4069C16 12.3034 13.5961 9.7655 10.6273 9.7655H5.37275C2.41708 9.7655 0 12.2896 0 15.4069C0 15.7379 0.249586 16 0.564855 16ZM5.37275 10.9517H10.6273C12.7816 10.9517 14.555 12.6345 14.8309 14.8138H1.16912C1.44498 12.6483 3.2184 10.9517 5.37275 10.9517Z", fill: color })));

var Icons = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IconProfile: Profile
});

const Icon = (_a) => {
    var { id, accessibility, accessibilityLabel, testID, name = '', touchable = true, size = 20, color = undefined, style = [{}], onPress = () => { }, borderColor = '', backgroundColor = '', iconSets } = _a, rest = __rest(_a, ["id", "accessibility", "accessibilityLabel", "testID", "name", "touchable", "size", "color", "style", "onPress", "borderColor", "backgroundColor", "iconSets"]);
    const iconName = (name === null || name === void 0 ? void 0 : name.charAt(0).toUpperCase()) + (name === null || name === void 0 ? void 0 : name.slice(1));
    const Svg = iconSets ? iconSets[`Icon${iconName}`] : Icons[`Icon${iconName}`];
    return (React__default['default'].createElement(reactNative.Animated.View, { style: style },
        React__default['default'].createElement(CommonTouchable, Object.assign({ id: id, accessibility: accessibility || iconName, accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id, disabled: !touchable, onPress: onPress }, rest),
            React__default['default'].createElement(reactNative.View, null, Svg ? (React__default['default'].createElement(Svg, { width: size, height: size, color: color, borderColor: borderColor, backgroundColor: backgroundColor })) : (React__default['default'].createElement(MaterialIcons__default['default'], { name: name, color: color, size: size }))))));
};

// const factor = 1.2;
// const normalTextSize = moderateScale(16, factor);
// const normalPlaceholderSize = moderateScale(14, factor);
// const bigTextSize = moderateScale(24, factor);
// const bigPlaceholderSize = moderateScale(20, factor);
// const placeholderVariant = (props: any) => getFontSize('subhead')(props);
// const placeholderBigVariant = 'title4';
const isLeftIcon = helpers.ifStyle('leftIcon');
const isMultiline = helpers.ifStyle('multiline');
const isCentered$1 = helpers.ifStyle('centered');
const hasLabel = helpers.ifStyle('label');
const hasError = helpers.ifStyle('error');
const isContrast = helpers.ifStyle('contrast');
const switchStatus = helpers.switchStyle('status');
const primaryContrast = helpers.getTheme('primary.contrast');
const primaryMain = helpers.getTheme('primary.main');
const smallSpacing = helpers.getTheme('smallSpacing');
const mediumSpacing = helpers.getTheme('mediumSpacing');
const success = helpers.getTheme('success');
const textColor = helpers.getTheme('text');
const failure = helpers.getTheme('failure');
const disabled = helpers.getTheme('disabled');
const inputColor = (props) => switchStatus({
    [exports.InputStatus.Success]: success,
    [exports.InputStatus.Failure]: failure,
    [exports.InputStatus.Default]: isContrast(primaryContrast, textColor)(props),
    [exports.InputStatus.Disabled]: disabled,
});
const LABEL_UPPER_STYLE = {
    top: -10,
    fontSize: scaledFontSize(14),
};
const LABEL_LOWER_STYLE = {
    top: 20,
    fontSize: scaledFontSize(18),
};
const Wrapper = styled__default['default'].View `
  justify-content: ${hasLabel('flex-end', 'flex-start')};
  padding-top: ${hasLabel(smallSpacing, 0)};
  position: relative;
`;
const InputAreaWrapper = styled__default['default'].View `
  padding-top: ${({ padding }) => (!!padding && `${padding}px`) || smallSpacing};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const TextLabel = styled__default['default'].Text `
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
  position: absolute;
  color: ${inputColor};
  top: ${LABEL_LOWER_STYLE.top}px;
`;
const Label = reactNative.Animated.createAnimatedComponent(TextLabel);
const TextInput = styled__default['default'].TextInput.attrs((props) => ({
    accessibilityLabel: props.accessibilityLabel || props.accessibility,
    testID: props.testID || props.id,
    textAlign: isCentered$1('center', 'left')(props),
    placeholderTextColor: props.placeholderTextColor
        ? props.placeholderTextColor
        : '#72727260',
})) `
  padding: 0;
  flex-grow: 1;
  border-width: 0;
  min-height: ${reactNativeSizeMatters.moderateScale(24)}px;
  color: ${inputColor};
  margin-top: ${isMultiline(mediumSpacing, 0)};
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
`;
const BottomLine = styled__default['default'].View `
  height: ${reactNative.StyleSheet.hairlineWidth}px;
  background-color: ${inputColor};
`;
const Icon$1 = styled__default['default'](Icon).attrs((props) => ({
    color: hasError(failure(props), props.iconColor ||
        isContrast(primaryContrast(props), primaryMain(props))(props))(props),
})) `
  padding-right: ${isLeftIcon(reactNativeSizeMatters.moderateScale(10), 0)}px;
`;

const Input = TextInput.withComponent(reactNativeMaskedText.TextInputMask);
const TextInput$1 = styled__default['default'](Input).attrs((props) => ({
    placeholderTextColor: props.placeholderTextColor
        ? props.placeholderTextColor
        : '#72727260',
})) ``;

const MaskedTextInput = (_a) => {
    var { maskType, inputRef, id, accessibility, contrast = false, multiline = false, status = exports.InputStatus.Default } = _a, props = __rest(_a, ["maskType", "inputRef", "id", "accessibility", "contrast", "multiline", "status"]);
    return (React__default['default'].createElement(TextInput$1, Object.assign({}, props, { id: id, status: status, accessibility: accessibility, testID: id, accessibilityLabel: accessibility, ref: inputRef, contrast: contrast, multiline: multiline, type: maskType, underlineColorAndroid: "transparent" })));
};

const TextInput$2 = (_a) => {
    var { id, accessibility, accessibilityLabel, testID, large = false, contrast = false, centered = false, borderless = false, multiline = false, autoFocus = false, allowFontScaling = false, keyboardType = 'default', iconSize = 20, iconTouchableEnabled = false, status = exports.InputStatus.Default, maskType = null, iconName = '', label = '', value = '', placeholder = '', error = '', style = {}, textStyle = {}, labelStyle = {}, iconHitSlop = {}, inputRef = React.useRef(null), onBlur = () => { }, onFocus = () => { }, onChangeText = () => { }, onPressIcon = () => { }, leftIcon = false, iconColor, inputPadding } = _a, rest = __rest(_a, ["id", "accessibility", "accessibilityLabel", "testID", "large", "contrast", "centered", "borderless", "multiline", "autoFocus", "allowFontScaling", "keyboardType", "iconSize", "iconTouchableEnabled", "status", "maskType", "iconName", "label", "value", "placeholder", "error", "style", "textStyle", "labelStyle", "iconHitSlop", "inputRef", "onBlur", "onFocus", "onChangeText", "onPressIcon", "leftIcon", "iconColor", "inputPadding"])
    // eslint-disable-next-line sonarjs/cognitive-complexity
    ;
    const [labelAnimatedStyle] = React.useState({
        top: new reactNative.Animated.Value(LABEL_LOWER_STYLE.top),
        fontSize: new reactNative.Animated.Value(LABEL_LOWER_STYLE.fontSize),
    });
    const [isPlaceholder, setIsPlaceHolder] = React.useState(true);
    const previousValue = usePrevious(value || '');
    const labelVariant = large ? 'subhead' : 'footnote';
    const textVariant = large ? 'title2' : 'headline';
    const placeholderVariant = large ? 'title3' : 'body';
    const animateComponent = React.useCallback((updatedLabelStyle) => {
        const animations = Object.keys(updatedLabelStyle).map((animationProp) => reactNative.Animated.timing(labelAnimatedStyle[animationProp], {
            toValue: updatedLabelStyle[animationProp],
            duration: 200,
            useNativeDriver: false,
        }));
        reactNative.Animated.parallel(animations).start();
    }, [labelAnimatedStyle]);
    const animationUp = () => {
        animateComponent(LABEL_UPPER_STYLE);
    };
    const animationDown = () => {
        animateComponent(LABEL_LOWER_STYLE);
    };
    const handleOnFocus = (event) => {
        if (isPlaceholder) {
            setIsPlaceHolder(false);
            animationUp();
        }
        onFocus(event);
    };
    const handleOnBlur = (event) => {
        const isEmptyLabel = label === '';
        if (!value && !isEmptyLabel) {
            setIsPlaceHolder(true);
            animationDown();
        }
        if (isEmptyLabel) {
            setIsPlaceHolder(false);
        }
        onBlur(event);
    };
    const renderTextInput = (inputStatus) => {
        const renderPlaceholder = !value && !isPlaceholder ? placeholder : '';
        const textInputProps = Object.assign({ id,
            accessibility,
            accessibilityLabel,
            testID,
            large, variant: textVariant, centered,
            contrast,
            borderless,
            multiline,
            value,
            keyboardType,
            onChangeText,
            allowFontScaling,
            isPlaceholder, status: inputStatus, placeholder: renderPlaceholder, style: textStyle, onBlur: handleOnBlur, onFocus: handleOnFocus, autoFocus, underlineColorAndroid: 'transparent' }, rest);
        return (React__default['default'].createElement(MaskedTextInput, Object.assign({ inputRef: inputRef, maskType: maskType || 'no-mask', accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id }, textInputProps)));
    };
    const setAnimation = () => {
        const wasEmpty = (previousValue === null || previousValue === void 0 ? void 0 : previousValue.length) === 0;
        if (value && value.length && wasEmpty) {
            animationUp();
        }
        if (label === '') {
            setIsPlaceHolder(false);
        }
    };
    React.useEffect(() => {
        setAnimation();
    }, [value, previousValue]);
    const hasError = !lodash.isEmpty(error);
    const icon = iconName;
    const renderStatus = hasError ? exports.InputStatus.Failure : status;
    const renderIcon = (iconProp) => (React__default['default'].createElement(Icon$1, { id: `id_${iconProp}`, accessibility: `icon_${accessibility}`, size: iconSize, name: iconProp || '', contrast: contrast, error: hasError, touchable: iconTouchableEnabled, onPress: onPressIcon, hitSlop: iconHitSlop, leftIcon: leftIcon, iconColor: iconColor }));
    return (React__default['default'].createElement(Wrapper, { style: style, multiline: multiline },
        React__default['default'].createElement(FormError, { id: id, accessibility: accessibility, centered: centered, error: error, large: large },
            !centered && (React__default['default'].createElement(Label, { status: status, contrast: contrast, style: [labelAnimatedStyle, labelStyle], variant: isPlaceholder ? placeholderVariant : labelVariant, testID: `error_${id}`, accessibilityLabel: `Erro ${accessibility}` }, label)),
            React__default['default'].createElement(InputAreaWrapper, { multiline: multiline, padding: inputPadding },
                leftIcon && !lodash.isEmpty(icon) && renderIcon(icon),
                renderTextInput(renderStatus),
                !leftIcon && !lodash.isEmpty(icon) && renderIcon(icon)),
            !borderless && React__default['default'].createElement(BottomLine, { status: status, contrast: contrast }))));
};

const hasError$1 = helpers.ifStyle('error');
const isContrast$1 = helpers.ifStyle('contrast');
const isCentered$2 = helpers.ifStyle('centered');
const failure$1 = helpers.getTheme('failure');
const primaryMain$1 = helpers.getTheme('primary.main');
const disabledDark = helpers.getTheme('primary.Dark');
const primaryContrast$1 = helpers.getTheme('primary.contrast');
const mediumSpacing$1 = helpers.getTheme('mediumSpacing');
const defaultStyling = (theme) => ({
    cellStyle: {
        borderRadius: reactNativeSizeMatters.moderateScale(8),
        borderColor: theme ? disabledDark(theme) : '#eeeeee',
        borderWidth: 2,
    },
    cellStyleFocused: {
        borderColor: theme ? primaryMain$1(theme) : '#eeeeee',
    },
    textStyle: {
        fontSize: reactNativeSizeMatters.moderateScale(26),
        color: 'black',
    },
});
const Wrapper$1 = styled__default['default'].View `
  align-items: center;
  flex-direction: row;
`;
const PinCodeInput = styled__default['default'](DefaultCodeInput__default['default']) ``;
const Icon$2 = styled__default['default'](Icon).attrs((props) => ({
    color: hasError$1(failure$1(props), isContrast$1(primaryContrast$1(props), primaryMain$1(props))(props))(props),
})) `
  margin-left: ${mediumSpacing$1};
`;
const CaptionText = styled__default['default'](Typography).attrs({
    variant: 'footnote',
}) `
  text-align: ${isCentered$2('center', 'left')};
  opacity: 0.67;
  font-weight: 300;
`;

const PinInput = (_a) => {
    var { password = false, animated = false, centered = false, contrast = false, mask = '•', codeLength = 4, cellSpacing = reactNativeSizeMatters.moderateScale(6), iconSize = reactNativeSizeMatters.moderateScale(24), cellSize = reactNativeSizeMatters.moderateScale(56), caption, error, value, onChangeText, onFulfill = () => { }, wrapperStyle } = _a, rest = __rest(_a, ["password", "animated", "centered", "contrast", "mask", "codeLength", "cellSpacing", "iconSize", "cellSize", "caption", "error", "value", "onChangeText", "onFulfill", "wrapperStyle"]);
    const [hidePassword, setHidePassword] = React.useState(true);
    const theme = React.useContext(styledComponents.ThemeContext);
    const defaultStyle = defaultStyling(theme);
    const changeText = (text) => {
        onChangeText(text);
        if (text.length === codeLength) {
            onFulfill(text);
        }
    };
    return (React__default['default'].createElement(FormError, { centered: centered, error: error },
        React__default['default'].createElement(Wrapper$1, { style: wrapperStyle },
            React__default['default'].createElement(PinCodeInput, Object.assign({ value: value, onTextChange: changeText, password: password && hidePassword, mask: mask, codeLength: codeLength, animated: animated, cellSize: cellSize, cellSpacing: cellSpacing }, defaultStyle, rest)),
            password && (React__default['default'].createElement(Icon$2, { id: "code_input_icon", accessibility: "Exibir ou ocultar inputs", name: hidePassword ? 'eye' : 'eye-off', size: iconSize, onPress: () => setHidePassword(!hidePassword), contrast: contrast, error: false }))),
        !!caption && React__default['default'].createElement(CaptionText, { centered: centered }, caption)));
};

const PasswordInput = (props) => {
    const [hidePassword, setHidePassword] = React.useState(true);
    const hitSlop = {
        left: 40,
        right: 40,
        top: 40,
        bottom: 40,
    };
    const onPressShowPassword = React.useCallback(() => {
        setHidePassword(!hidePassword);
    }, [hidePassword]);
    return (React__default['default'].createElement(TextInput$2, Object.assign({ secureTextEntry: hidePassword, iconName: hidePassword ? 'eye' : 'eye-off', iconTouchableEnabled: true, onPressIcon: onPressShowPassword, iconHitSlop: hitSlop }, props)));
};

var v = "4.6.0";
var fr = 29.9700012207031;
var ip = 0;
var op = 49.0000019958109;
var w = 200;
var h = 200;
var nm = "loading_ring_medium";
var ddd = 0;
var assets = [
];
var layers = [
	{
		ddd: 0,
		ind: 1,
		ty: 4,
		nm: "green ring 1",
		ks: {
			o: {
				a: 0,
				k: 100
			},
			r: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.833
							],
							y: [
								0.833
							]
						},
						o: {
							x: [
								0.167
							],
							y: [
								0.167
							]
						},
						n: [
							"0p833_0p833_0p167_0p167"
						],
						t: 0,
						s: [
							0
						],
						e: [
							360
						]
					},
					{
						t: 49.0000019958109
					}
				]
			},
			p: {
				a: 0,
				k: [
					100,
					100,
					0
				]
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			s: {
				a: 0,
				k: [
					200,
					200,
					100
				]
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						d: 1,
						ty: "el",
						s: {
							a: 0,
							k: [
								54,
								54
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						nm: "Ellipse Path 1",
						mn: "ADBE Vector Shape - Ellipse"
					},
					{
						ty: "st",
						c: {
							a: 0,
							k: [
								0.949,
								0.6,
								0.29,
								1
							]
						},
						o: {
							a: 0,
							k: 100
						},
						w: {
							a: 0,
							k: 6
						},
						lc: 2,
						lj: 1,
						ml: 4,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke"
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Ellipse 1",
				np: 3,
				mn: "ADBE Vector Group"
			},
			{
				ty: "tm",
				s: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.644
								],
								y: [
									0
								]
							},
							n: [
								"0p667_1_0p644_0"
							],
							t: 10,
							s: [
								0
							],
							e: [
								100
							]
						},
						{
							t: 50.0000020365418
						}
					],
					ix: 1
				},
				e: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.333
								],
								y: [
									0
								]
							},
							n: [
								"0p667_1_0p333_0"
							],
							t: -1,
							s: [
								0
							],
							e: [
								100
							]
						},
						{
							t: 37.0000015070409
						}
					],
					ix: 2
				},
				o: {
					a: 0,
					k: 0,
					ix: 3
				},
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim"
			}
		],
		ip: 0,
		op: 50.0000020365418,
		st: -1.00000004073083,
		bm: 0,
		sr: 1
	},
	{
		ddd: 0,
		ind: 2,
		ty: 4,
		nm: "flamingo ring 3",
		parent: 1,
		ks: {
			o: {
				a: 0,
				k: 100
			},
			r: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.785
							],
							y: [
								1
							]
						},
						o: {
							x: [
								1
							],
							y: [
								0
							]
						},
						n: [
							"0p785_1_1_0"
						],
						t: 17,
						s: [
							14.2
						],
						e: [
							360
						]
					},
					{
						t: 50.0000020365418
					}
				]
			},
			p: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				]
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						d: 1,
						ty: "el",
						s: {
							a: 0,
							k: [
								54,
								54
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						nm: "Ellipse Path 1",
						mn: "ADBE Vector Shape - Ellipse"
					},
					{
						ty: "st",
						c: {
							a: 0,
							k: [
								0.435,
								0.812,
								0.592,
								1
							]
						},
						o: {
							a: 0,
							k: 100
						},
						w: {
							a: 0,
							k: 6
						},
						lc: 2,
						lj: 1,
						ml: 4,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke"
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Ellipse 1",
				np: 3,
				mn: "ADBE Vector Group"
			},
			{
				ty: "tm",
				s: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.833
								],
								y: [
									0.833
								]
							},
							o: {
								x: [
									0.167
								],
								y: [
									0.167
								]
							},
							n: [
								"0p833_0p833_0p167_0p167"
							],
							t: 42,
							s: [
								0
							],
							e: [
								1
							]
						},
						{
							t: 44.0000017921567
						}
					],
					ix: 1
				},
				e: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.833
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.333
								],
								y: [
									0
								]
							},
							n: [
								"0p833_1_0p333_0"
							],
							t: 20,
							s: [
								0
							],
							e: [
								1
							]
						},
						{
							t: 44.0000017921567
						}
					],
					ix: 2
				},
				o: {
					a: 0,
					k: 0,
					ix: 3
				},
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim"
			}
		],
		ip: 17.0000006924242,
		op: 44.0000017921567,
		st: -1.00000004073083,
		bm: 0,
		sr: 1
	},
	{
		ddd: 0,
		ind: 3,
		ty: 4,
		nm: "flamingo ring 2",
		parent: 1,
		ks: {
			o: {
				a: 0,
				k: 100
			},
			r: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.612
							],
							y: [
								1
							]
						},
						o: {
							x: [
								1
							],
							y: [
								0
							]
						},
						n: [
							"0p612_1_1_0"
						],
						t: 17,
						s: [
							14.2
						],
						e: [
							360
						]
					},
					{
						t: 50.0000020365418
					}
				]
			},
			p: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				]
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						d: 1,
						ty: "el",
						s: {
							a: 0,
							k: [
								54,
								54
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						nm: "Ellipse Path 1",
						mn: "ADBE Vector Shape - Ellipse"
					},
					{
						ty: "st",
						c: {
							a: 0,
							k: [
								0.435,
								0.812,
								0.592,
								1
							]
						},
						o: {
							a: 0,
							k: 100
						},
						w: {
							a: 0,
							k: 6
						},
						lc: 2,
						lj: 1,
						ml: 4,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke"
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Ellipse 1",
				np: 3,
				mn: "ADBE Vector Group"
			},
			{
				ty: "tm",
				s: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.833
								],
								y: [
									0.833
								]
							},
							o: {
								x: [
									0.167
								],
								y: [
									0.167
								]
							},
							n: [
								"0p833_0p833_0p167_0p167"
							],
							t: 42,
							s: [
								0
							],
							e: [
								13.7
							]
						},
						{
							t: 44.0000017921567
						}
					],
					ix: 1
				},
				e: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.833
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.333
								],
								y: [
									0
								]
							},
							n: [
								"0p833_1_0p333_0"
							],
							t: 20,
							s: [
								0
							],
							e: [
								13.7
							]
						},
						{
							t: 44.0000017921567
						}
					],
					ix: 2
				},
				o: {
					a: 0,
					k: 0,
					ix: 3
				},
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim"
			}
		],
		ip: 17.0000006924242,
		op: 44.0000017921567,
		st: -1.00000004073083,
		bm: 0,
		sr: 1
	},
	{
		ddd: 0,
		ind: 4,
		ty: 4,
		nm: "flaming ring 1",
		parent: 1,
		ks: {
			o: {
				a: 0,
				k: 100
			},
			r: {
				a: 0,
				k: 0
			},
			p: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				]
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						d: 1,
						ty: "el",
						s: {
							a: 0,
							k: [
								54,
								54
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						nm: "Ellipse Path 1",
						mn: "ADBE Vector Shape - Ellipse"
					},
					{
						ty: "st",
						c: {
							a: 0,
							k: [
								0.435,
								0.812,
								0.592,
								1
							]
						},
						o: {
							a: 0,
							k: 100
						},
						w: {
							a: 0,
							k: 6
						},
						lc: 2,
						lj: 1,
						ml: 4,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke"
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Ellipse 1",
				np: 3,
				mn: "ADBE Vector Group"
			},
			{
				ty: "tm",
				s: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									1
								],
								y: [
									0
								]
							},
							n: [
								"0p667_1_1_0"
							],
							t: 8,
							s: [
								0
							],
							e: [
								100
							]
						},
						{
							t: 48.0000019550801
						}
					],
					ix: 1
				},
				e: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									1
								],
								y: [
									0
								]
							},
							n: [
								"0p667_1_1_0"
							],
							t: -1,
							s: [
								0
							],
							e: [
								100
							]
						},
						{
							t: 37.0000015070409
						}
					],
					ix: 2
				},
				o: {
					a: 0,
					k: 0,
					ix: 3
				},
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim"
			}
		],
		ip: 15.0000006109625,
		op: 44.0000017921567,
		st: -1.00000004073083,
		bm: 0,
		sr: 1
	}
];
var LoadingAnimation = {
	v: v,
	fr: fr,
	ip: ip,
	op: op,
	w: w,
	h: h,
	nm: nm,
	ddd: ddd,
	assets: assets,
	layers: layers
};

const circularLoading = helpers.getTheme('circularLoading');
const contrastCircularLoading = helpers.getTheme('contrastCircularLoading');
const buttonLoading = helpers.getTheme('buttonLoading');
const contrastButtonLoading = helpers.getTheme('contrastButtonLoading');
const linearLoading = helpers.getTheme('linearLoading');
const contrastLinearLoading = helpers.getTheme('contrastLinearLoading');
const loadingVariant = (props) => {
    const { variant, contrast } = props;
    switch (variant) {
        case 'button':
            return contrast
                ? contrastButtonLoading(props)
                : buttonLoading(props) || LoadingAnimation;
        case 'circular':
            return contrast
                ? contrastCircularLoading(props)
                : circularLoading(props) || LoadingAnimation;
        case 'linear':
            return contrast
                ? contrastLinearLoading(props)
                : linearLoading(props) || LoadingAnimation;
        default:
            return contrast ? contrastCircularLoading(props) : circularLoading(props);
    }
};
const smallSize = {
    width: reactNativeSizeMatters.moderateScale(60),
    height: reactNativeSizeMatters.moderateScale(60),
};
const largeSize = {
    width: reactNativeSizeMatters.moderateScale(120),
    height: reactNativeSizeMatters.moderateScale(120),
};
const Indicator = styled__default['default'](Animation__default['default']).attrs((props) => ({
    source: loadingVariant(props),
    autoPlay: true,
    loop: true,
})) ``;

const Loading = (_a) => {
    var { large = false, contrast = false, variant = 'circular' } = _a, rest = __rest(_a, ["large", "contrast", "variant"]);
    return (React__default['default'].createElement(Indicator, Object.assign({ testID: "loading", accessibilityLabel: "Aguarde", variant: variant, contrast: contrast, style: large ? largeSize : smallSize }, rest)));
};

const disabledMain = helpers.getTheme('disabled.main');
const disabledContrast = helpers.getTheme('disabled.contrast');
const primaryMain$2 = helpers.getTheme('primary.main');
const primaryContrast$2 = helpers.getTheme('primary.contrast');
const secondaryMain = helpers.getTheme('secondary.main');
const secondaryContrast = helpers.getTheme('secondary.contrast');
const tertiaryMain = helpers.getTheme('tertiary.main');
const tertiaryContrast = helpers.getTheme('tertiary.contrast');
const accentMain = helpers.getTheme('accent.main');
const accentContrast = helpers.getTheme('accent.contrast');
const buttonRadius = helpers.getTheme('buttonRadius');
const buttonSize = reactNativeSizeMatters.moderateScale(48);
const getBackgroundColor = (props) => {
    if (props.disabled) {
        return disabledMain(props);
    }
    switch (props.variant) {
        case 'primary':
            return primaryMain$2(props);
        case 'secondary':
            return secondaryMain(props);
        case 'tertiary':
            return tertiaryMain(props);
        case 'accent':
            return accentMain(props);
        case 'flat':
            return 'transparent';
        default:
            return primaryMain$2(props);
    }
};
const getTextColor = (props) => {
    if (props.disabled) {
        return disabledContrast(props);
    }
    switch (props.variant) {
        case 'primary':
            return primaryContrast$2(props);
        case 'secondary':
            return secondaryContrast(props);
        case 'tertiary':
            return tertiaryContrast(props);
        case 'accent':
            return accentContrast(props);
        case 'flat':
            return primaryMain$2(props);
        default:
            return primaryContrast$2(props);
    }
};
const Touchable = styled__default['default'](CommonTouchable) `
  border-radius: ${(props) => (props.rounded ? '50px' : '0')};
`;
const ButtonWrapper = styled__default['default'].View `
  height: ${buttonSize}px;
  flex-direction: row;
  align-items: center;
  margin-vertical: ${reactNativeSizeMatters.moderateScale(6)}px;
  min-width: ${reactNativeSizeMatters.moderateScale(180)}px;
  padding: ${(props) => (props.rounded ? '0' : '10px 11px')};
  border-radius: ${(props) => props.rounded ? `${buttonSize / 2}px` : buttonRadius(props)};
  justify-content: center;
  background-color: ${getBackgroundColor};
  border-color: ${getTextColor};
  border: ${(props) => props.variant === 'flat' ? `1px solid ${getTextColor(props)}` : '0'};
`;
const TextButton = styled__default['default'](Typography) `
  letter-spacing: 0.4px;
  color: ${getTextColor};
  font-weight: 500;
`;
const Loading$1 = styled__default['default'](Loading).attrs({
    variant: 'button',
}) `
  align-self: center;
  width: ${reactNativeSizeMatters.moderateScale(55)}px;
`;

const Button = ({ id, children, onPress, accessibility, accessibilityLabel, testID, style = [{}], textStyle = {}, disabled = false, rounded = false, loading = false, contrast = false, variant = 'primary', typographyVariant = 'body', }) => {
    return (React__default['default'].createElement(Touchable, { id: id, accessibility: accessibility, accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id, disabled: loading || disabled, onPress: onPress, rounded: rounded },
        React__default['default'].createElement(ButtonWrapper, { variant: variant, style: style, disabled: disabled, rounded: rounded },
            loading && React__default['default'].createElement(Loading$1, { contrast: contrast }),
            !loading && (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(TextButton, { style: textStyle, disabled: disabled, variant: typographyVariant }, children))))));
};

const If = ({ condition, children }) => condition ? children : null;

const primaryContrast$3 = helpers.getTheme('primary.contrast');
const accentMain$1 = helpers.getTheme('accent.main');
const isRelative = helpers.ifStyle('relativePos');
const Wrapper$2 = styled__default['default'](CommonTouchable) `
  position: ${isRelative('relative', 'absolute')};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color || accentMain$1};
  border-radius: ${({ size }) => size / 2}px;
  ${({ hasShadow }) => (hasShadow ? getShadow() : {})}
`;
const Icon$3 = styled__default['default'](Icon).attrs((props) => ({
    color: props.iconColor || primaryContrast$3(props),
    touchable: false,
    size: props.iconSize ? reactNativeSizeMatters.moderateScale(props.iconSize) : reactNativeSizeMatters.moderateScale(24),
})) ``;
const Title = styled__default['default'](Typography).attrs({
    variant: 'subhead',
}) `
  color: ${primaryContrast$3};
  font-weight: 700;
`;

const FAB = (_a) => {
    var { size = reactNativeSizeMatters.moderateScale(70), id, accessibility, title, color, iconName, iconColor, iconSize, onPress, relativePos = false, hasShadow = false } = _a, rest = __rest(_a, ["size", "id", "accessibility", "title", "color", "iconName", "iconColor", "iconSize", "onPress", "relativePos", "hasShadow"]);
    return (React__default['default'].createElement(Wrapper$2, Object.assign({ id: id, accessibility: accessibility, onPress: onPress, size: size, color: color, relativePos: relativePos, hasShadow: hasShadow }, rest),
        React__default['default'].createElement(Icon$3, { id: id, name: iconName || 'plus', accessibility: accessibility, iconColor: iconColor, iconSize: iconSize }),
        React__default['default'].createElement(If, { condition: !lodash.isEmpty(title) },
            React__default['default'].createElement(Title, null, title))));
};

const primary = '#C6B09E';
const secondary = '#805281';
const tertiary = '#2A2E39';
const accent = '#547E6A';
const disabled$1 = '#eeeeee';
const colors = {
    text: '#212121',
    info: '#4096D1',
    success: '#357a38',
    warning: '#F5B800',
    failure: '#cc0000',
    disabled: {
        light: polished.lighten(0.05, disabled$1),
        main: disabled$1,
        dark: polished.darken(0.3, disabled$1),
        contrast: '#cccccc',
    },
    primary: {
        light: polished.lighten(0.05, primary),
        main: primary,
        dark: polished.darken(0.12, primary),
        contrast: '#ffffff',
    },
    secondary: {
        light: polished.lighten(0.05, secondary),
        main: secondary,
        dark: polished.darken(0.1, secondary),
        contrast: '#ffffff',
    },
    tertiary: {
        light: polished.lighten(0.15, tertiary),
        main: tertiary,
        dark: polished.darken(0.1, tertiary),
        contrast: '#ffffff',
    },
    accent: {
        light: polished.lighten(0.05, accent),
        main: accent,
        dark: polished.darken(0.05, accent),
        contrast: '#ffffff',
    },
};

({
    topSpacing: `${reactNativeIphoneXHelper.getStatusBarHeight()}px`,
    bottomSpacing: `${reactNativeIphoneXHelper.isIphoneX() ? reactNativeSizeMatters.moderateScale(10) : 0}px`,
    sceneSpacing: `${reactNativeSizeMatters.moderateScale(24)}px`,
    sectionSpacing: `${reactNativeSizeMatters.moderateScale(40)}px`,
    minimumSpacing: `${reactNativeSizeMatters.moderateScale(4)}px`,
    smallSpacing: `${reactNativeSizeMatters.moderateScale(12)}px`,
    mediumSpacing: `${reactNativeSizeMatters.moderateScale(20)}px`,
    largeSpacing: `${reactNativeSizeMatters.moderateScale(24)}px`,
    giantSpacing: `${reactNativeSizeMatters.moderateScale(72)}px`,
});

({
    smallRadius: `${reactNativeSizeMatters.moderateScale(3)}px`,
    mediumRadius: `${reactNativeSizeMatters.moderateScale(8)}px`,
    largeRadius: `${reactNativeSizeMatters.moderateScale(15)}px`,
    modalRadius: `${reactNativeSizeMatters.moderateScale(20)}px`,
    buttonRadius: `${reactNativeSizeMatters.moderateScale(7)}px`,
});

const Wrapper$3 = styled__default['default'].View ``;
const defaultLabelStyle = {
    fontSize: 16,
    color: colors.primary.contrast,
    opacity: 0.7,
};
const containerStyle = {
    marginBottom: 0,
};
const CheckBox = styled__default['default'](DefaultCheckbox__default['default']) ``;

const CheckboxComponent = ({ id, accessibility, label = '', error = '', labelBefore = '', checked = false, onPress = () => { }, labelStyle = defaultLabelStyle, checkBoxColor, checkedCheckBoxColor, uncheckedCheckBoxColor, style, }) => (React__default['default'].createElement(FormError, { id: id, accessibility: accessibility, error: error },
    React__default['default'].createElement(Wrapper$3, { style: style },
        React__default['default'].createElement(CheckBox, { testID: `check_${id}`, accessibilityLabel: `Check ${accessibility}`, style: containerStyle, isChecked: checked, rightText: label, rightTextStyle: labelStyle, leftText: labelBefore, onClick: onPress, checkBoxColor: checkBoxColor, checkedCheckBoxColor: checkedCheckBoxColor, uncheckedCheckBoxColor: uncheckedCheckBoxColor }))));

const View = styled__default['default'].View `
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  elevation: 3;
  shadow-radius: 4px;
`;

const Shadow = (_a) => {
    var { children, hasShadow = true } = _a, rest = __rest(_a, ["children", "hasShadow"]);
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(If, { condition: hasShadow },
            React__default['default'].createElement(View, Object.assign({}, rest), children)),
        React__default['default'].createElement(If, { condition: !hasShadow },
            React__default['default'].createElement(reactNative.View, Object.assign({}, rest), children))));
};

const getStatusStyle = helpers.switchStyle('status');
const primaryContrast$4 = helpers.getTheme('primary.contrast');
const primaryDark = helpers.getTheme('primary.dark');
const disabled$2 = helpers.getTheme('disabled.main');
const inputMainColor = (props) => getStatusStyle({
    [exports.InputStatus.Success]: helpers.getTheme('success'),
    [exports.InputStatus.Failure]: helpers.getTheme('failure'),
    [exports.InputStatus.Default]: props.dark ? primaryDark : primaryContrast$4,
    [exports.InputStatus.Disabled]: disabled$2,
});
const LABEL_UPPER_STYLE$1 = {
    top: 8,
    fontSize: 14,
};
const LABEL_LOWER_STYLE$1 = {
    top: 40,
    fontSize: 18,
};
const TextLabel$1 = styled__default['default'].Text `
  line-height: 19px;
  padding-bottom: 15px;
  color: ${(props) => props.dark ? primaryDark(props) : primaryContrast$4(props)};
`;
const Label$1 = reactNative.Animated.createAnimatedComponent(TextLabel$1);
const DatePicker = styled__default['default'](DefaultDatePicker__default['default']) `
  width: 100%;
`;
const BottomLine$1 = styled__default['default'].View `
  height: 1px;
  background-color: ${inputMainColor};
`;
const commonDatePickerStyles = {
    disabled: {
        backgroundColor: 'transparent',
    },
    dateInput: {
        borderWidth: 0,
    },
    dateTouchBody: {
        width: '100%',
    },
};
const DatePickerStyles = Object.assign(Object.assign({}, commonDatePickerStyles), { placeholderText: {
        position: 'absolute',
        left: 0,
        color: '#fff',
        fontSize: LABEL_LOWER_STYLE$1.fontSize,
    }, dateText: {
        position: 'absolute',
        left: 0,
        color: '#fff',
        fontSize: LABEL_UPPER_STYLE$1.fontSize,
        fontWeight: '700',
    } });
const DatePickerStylesDark = Object.assign(Object.assign({}, commonDatePickerStyles), { placeholderText: {
        position: 'absolute',
        left: 0,
        color: '#000',
        fontSize: LABEL_LOWER_STYLE$1.fontSize,
    }, dateText: {
        position: 'absolute',
        left: 0,
        color: '#000',
        fontSize: LABEL_UPPER_STYLE$1.fontSize,
        fontWeight: '700',
    } });

const DatePickerInput = ({ id, accessibility, label = '', error = '', dark = false, editable = true, value = '', testID = '', mode = 'date', androidMode = 'spinner', locale = 'pt-BR', format = 'DD/MM/YYYY', cancelBtnText = 'Cancelar', confirmBtnText = 'Confirmar', onDateChange = () => { }, maxDate, }) => {
    const [labelAnimatedStyle] = React.useState({
        top: new reactNative.Animated.Value(LABEL_LOWER_STYLE$1.top),
        fontSize: new reactNative.Animated.Value(LABEL_LOWER_STYLE$1.fontSize),
    });
    const [date, setDate] = React.useState('');
    const [isPlaceholder, setIsPlaceHolder] = React.useState(true);
    const execAnimation = React.useCallback(() => {
        const animations = Object.keys(LABEL_UPPER_STYLE$1).map((animationProp) => reactNative.Animated.timing(labelAnimatedStyle[animationProp], {
            toValue: LABEL_UPPER_STYLE$1[animationProp],
            duration: 200,
            useNativeDriver: false,
        }));
        setIsPlaceHolder(false);
        reactNative.Animated.parallel(animations).start();
    }, [reactNative.Animated, labelAnimatedStyle]);
    const updateDate = React.useCallback((updatedDate) => {
        setDate(updatedDate);
        execAnimation();
        if (onDateChange) {
            onDateChange(updatedDate);
        }
    }, [onDateChange]);
    React.useEffect(() => {
        if (value) {
            execAnimation();
        }
    }, [value]);
    const customStyles = error
        ? Object.assign(Object.assign({}, DatePickerStyles), { dateInput: { borderColor: '#cc0000' } }) : dark
        ? DatePickerStylesDark
        : DatePickerStyles;
    return (React__default['default'].createElement(FormError, { id: id, accessibility: accessibility, error: error },
        React__default['default'].createElement(Label$1, { error: error || '', style: labelAnimatedStyle, isPlaceholder: isPlaceholder, dark: dark }, label),
        React__default['default'].createElement(DatePicker, { mode: mode, androidMode: androidMode, locale: locale, placeholder: " ", format: format, editable: !editable, date: date, customStyles: customStyles, maxDate: maxDate, testID: testID, confirmBtnText: confirmBtnText, cancelBtnText: cancelBtnText, onDateChange: updateDate, showIcon: false, dark: dark }),
        React__default['default'].createElement(BottomLine$1, { dark: dark })));
};

var img = "data:image/png;base64,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";

const accentMain$2 = helpers.getTheme('accent.main');
const accentContrast$1 = helpers.getTheme('accent.contrast');
const showBorder = helpers.ifStyle('showBorder');
const hasBorderWidth = helpers.ifStyle('borderWidth');
const hasBorderColor = helpers.ifStyle('borderColor');
const Wrapper$4 = styled__default['default'](CommonTouchable) `
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  overflow: hidden;
  border-width: ${(props) => showBorder(hasBorderWidth(props.borderWidth, '2'), '0')}px;
  border-color: ${(props) => hasBorderColor(props.borderColor, accentMain$2)};
  position: relative;
`;
const UploadIconWrapper = styled__default['default'].View `
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size / 4}px;
  height: ${(props) => props.size / 4}px;
  border-radius: ${(props) => props.size / 8}px;
  position: absolute;
  z-index: 2;
  background-color: ${accentMain$2};
`;
const UploadIcon = styled__default['default'](Icon).attrs({ name: 'camera' }) `
  color: ${accentContrast$1};
`;
const CameraView = styled__default['default'](reactNativeCamera.RNCamera) `
  width: ${(props) => props.size}px;
  height: 100%;
  border-radius: ${(props) => props.size / 2}px;
  overflow: hidden;
  border: ${showBorder('4px solid white', '')};
`;

const Avatar = React__default['default'].forwardRef((_a, ref) => {
    var { id, image = img, accessibility = 'Upload de Avatar', accessibilityLabel, testID, size = 50, onPress, onUpload, showBorder = true, displayCamera = false } = _a, rest = __rest(_a, ["id", "image", "accessibility", "accessibilityLabel", "testID", "size", "onPress", "onUpload", "showBorder", "displayCamera"]);
    const [uploadedImage, setUploadedImage] = React.useState();
    const cameraRef = React.useRef();
    const openPicker = () => {
        const options = {
            title: 'Selecionar foto',
            cancelButtonTitle: 'Cancelar',
            takePhotoButtonTitle: 'Tirar foto',
            chooseFromLibraryButtonTitle: 'Escolher da galeria',
            quality: 0.3,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        return new Promise((resolve) => {
            ImagePicker__default['default'].launchImageLibrary(options, (response) => {
                setUploadedImage(response.uri);
                if (onUpload) {
                    onUpload(response.uri);
                }
                resolve();
            });
        });
    };
    const takePicture = () => __awaiter(void 0, void 0, void 0, function* () {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true };
            const data = yield cameraRef.current.takePictureAsync(options);
            setUploadedImage(data);
            return data;
        }
    });
    const getUploadImage = () => {
        return uploadedImage;
    };
    const clearUploadImage = () => {
        setUploadedImage('');
    };
    const getCurrentAvatar = () => {
        if (uploadedImage) {
            return { uri: uploadedImage };
        }
        if (image && !lodash.isEmpty(image)) {
            return { uri: image };
        }
        return img;
    };
    React.useImperativeHandle(ref, () => ({
        getUploadImage,
        clearUploadImage,
        takePicture,
        openPicker,
    }));
    return (React__default['default'].createElement(Wrapper$4, Object.assign({ id: id, accessibility: accessibility, accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id, size: size, onPress: onPress, disabled: !onPress, showBorder: showBorder }, rest),
        displayCamera && !uploadedImage ? (React__default['default'].createElement(CameraView, { ref: cameraRef, size: size, type: reactNativeCamera.RNCamera.Constants.Type.front, flashMode: reactNativeCamera.RNCamera.Constants.FlashMode.auto, androidCameraPermissionOptions: {
                title: 'Câmera',
                message: 'Precisamos da sua permissão para usar a câmera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancelar',
            } })) : (React__default['default'].createElement(FastImage__default['default'], { source: getCurrentAvatar(), resizeMode: FastImage__default['default'].resizeMode.cover, style: { width: '101%', height: '101%' } })),
        React__default['default'].createElement(If, { condition: !!displayCamera },
            React__default['default'].createElement(UploadIconWrapper, { size: size },
                React__default['default'].createElement(UploadIcon, { id: "", accessibility: "" })))));
});
Avatar.displayName = 'AvatarComponent';

const primaryContrast$5 = helpers.getTheme('primary.contrast');
const Text$1 = styled__default['default'](Typography) `
  font-weight: 500;
  color: ${primaryContrast$5};
  text-decoration-color: ${primaryContrast$5};
  text-decoration-line: underline;
`;

const Link = (_a) => {
    var { id, onPress, children, accessibility, accessibilityLabel, testID, variant = 'body', style } = _a, rest = __rest(_a, ["id", "onPress", "children", "accessibility", "accessibilityLabel", "testID", "variant", "style"]);
    return (React__default['default'].createElement(CommonTouchable, Object.assign({ id: id, onPress: onPress, accessibility: accessibility, accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id }, rest),
        React__default['default'].createElement(Text$1, { testID: `text_${id}`, accessibilityLabel: `Texto ${accessibility}`, style: style, variant: variant }, children)));
};

const Icon$4 = styled__default['default'](Icon).attrs({
    touchable: false,
    size: reactNativeSizeMatters.moderateScale(24),
}) ``;

const AccordionContainer = ({ StyledTitle = reactNative.Text, StyledBody = reactNative.Text, StyledHeader = reactNative.View, StyledContent = reactNative.View, data, hasIcon = false, iconUpName = 'chevron-up', iconDownName = 'chevron-down', activeIconColor, inactiveIconColor, isMarkdown = false, onChange, }) => {
    const [activeSections, setActiveSections] = React.useState([]);
    const isActive = (section) => {
        const element = (item) => item.title === section.title;
        const index = data.findIndex(element);
        return index.toString() === activeSections.join('');
    };
    const getIconName = (section) => isActive(section) ? iconUpName : iconDownName;
    const renderHeader = (section) => {
        return (React__default['default'].createElement(StyledHeader, { isActive: isActive(section) },
            React__default['default'].createElement(StyledTitle, { isActive: isActive(section) }, section.title),
            React__default['default'].createElement(If, { condition: hasIcon },
                React__default['default'].createElement(Icon$4, { name: getIconName(section), color: isActive(section) ? activeIconColor : inactiveIconColor, id: iconUpName, accessibility: isActive(section) ? 'Fechar' : 'Abrir' }))));
    };
    const renderContent = (section) => {
        return (React__default['default'].createElement(StyledContent, null,
            React__default['default'].createElement(If, { condition: isMarkdown },
                React__default['default'].createElement(Markdown__default['default'], null, section.content)),
            React__default['default'].createElement(If, { condition: !isMarkdown },
                React__default['default'].createElement(StyledBody, null, section.content))));
    };
    const handleChange = (activeSectionsArray) => {
        const index = lodash.head(activeSectionsArray) || 0;
        if (onChange)
            onChange(data[index].title);
        setActiveSections(activeSectionsArray);
    };
    return (React__default['default'].createElement(Accordion__default['default'], { sections: data, activeSections: activeSections, renderHeader: renderHeader, renderContent: renderContent, onChange: handleChange }));
};

const textColor$1 = helpers.getTheme('text');
const hasColor = helpers.ifStyle('radioButtonColor');
const hasCheckedColor = helpers.ifStyle('checkedRadioButtonColor');
const Radio = styled__default['default'](CommonTouchable) `
  width: ${({ size }) => reactNativeSizeMatters.moderateScale(size)}px;
  height: ${({ size }) => reactNativeSizeMatters.moderateScale(size)}px;
  border-radius: ${({ size }) => reactNativeSizeMatters.moderateScale(size / 2)}px;
  border: ${reactNativeSizeMatters.moderateScale(1)}px
    ${({ radioButtonColor }) => hasColor(radioButtonColor, textColor$1)};
  align-items: center;
  justify-content: center;
`;
const CheckedRadio = styled__default['default'].View `
  width: ${({ internalSize }) => reactNativeSizeMatters.moderateScale(internalSize)}px;
  height: ${({ internalSize }) => reactNativeSizeMatters.moderateScale(internalSize)}px;
  background-color: ${({ checkedRadioButtonColor }) => hasCheckedColor(checkedRadioButtonColor, textColor$1)};
  border-radius: ${({ internalSize }) => reactNativeSizeMatters.moderateScale(internalSize / 2)}px;
`;

const RadioButton = ({ id, accessibility, radioButtonColor, checkedRadioButtonColor, size = 18, internalSize = 13, checked = false, onPress = () => { }, }) => (React__default['default'].createElement(Radio, { id: id, accessibility: accessibility, onPress: onPress, radioButtonColor: radioButtonColor, size: size },
    React__default['default'].createElement(If, { condition: checked },
        React__default['default'].createElement(CheckedRadio, { checkedRadioButtonColor: checkedRadioButtonColor, internalSize: internalSize }))));

const disabled$3 = helpers.getTheme('disabled.main');
const primaryContrast$6 = helpers.getTheme('primary.contrast');
const largeSpacing = helpers.getTheme('largeSpacing');
const largeRadius = helpers.getTheme('largeRadius');
const wrapperHeight = reactNativeSizeMatters.moderateScale(56);
const Wrapper$5 = styled__default['default'].View `
  flex-direction: row;
  flex: 1;
  height: ${({ height }) => (!!height && `${height}px`) || `${wrapperHeight}px`};
  background-color: ${primaryContrast$6};
  align-items: center;
  justify-content: center;
  padding-horizontal: ${({ inputPadding }) => (!!inputPadding && `${inputPadding}px`) || largeSpacing};
  border-radius: ${largeRadius};
  ${({ hasShadow }) => (hasShadow ? getShadow() : {})}
`;
const Input$1 = styled__default['default'](TextInput$2).attrs((props) => ({
    iconColor: `${props.iconColor || disabled$3(props)}`,
    iconTouchableEnabled: true,
    iconSize: props.iconSize || reactNativeSizeMatters.moderateScale(26),
})) `
  width: 100%;
  padding: 0;
  height: ${({ inputHeight }) => (!!inputHeight && inputHeight) || '90%'};
`;

const SearchInput = ({ id, accessibility, onChange, onClear = () => null, onFocus = () => null, onBlur = () => null, leftIcon = false, iconColor, placeholder, wrapperHeight, inputPadding, iconSize, hasShadow = false, inputStyle, containerStyle, placeholderTextColor, textStyle, onSubmit = () => null, autoFocus = false, }) => {
    const [searchText, setSearchText] = React.useState('');
    const [isSearching, setSearching] = React.useState(false);
    const [isFocused, setFocused] = React.useState(false);
    const ref = React.useRef(null);
    return (React__default['default'].createElement(Wrapper$5, { height: wrapperHeight, inputPadding: inputPadding, hasShadow: hasShadow, style: containerStyle },
        React__default['default'].createElement(Input$1, { textStyle: textStyle, placeholderTextColor: placeholderTextColor, style: inputStyle, inputRef: ref, borderless: true, large: false, id: id, accessibility: accessibility, autoFocus: autoFocus, autoCapitalize: "none", autoCorrect: false, iconName: isFocused || !!searchText ? 'close' : 'magnify', autoCompleteType: "off", placeholder: isSearching ? '' : placeholder || 'Pesquise aqui', onChangeText: (value) => {
                setSearchText(value);
                onChange(value);
            }, onPressIcon: () => {
                setSearchText('');
                onClear();
                setSearching(false);
                reactNative.Keyboard.dismiss();
            }, value: searchText, onFocus: () => {
                setFocused(true);
                if (!autoFocus)
                    onFocus();
            }, onBlur: () => {
                onBlur();
                setFocused(false);
                if (!searchText) {
                    setSearching(false);
                }
            }, leftIcon: leftIcon, iconColor: iconColor, iconSize: iconSize, inputPadding: inputPadding, onSubmitEditing: onSubmit })));
};

exports.Accordion = AccordionContainer;
exports.Avatar = Avatar;
exports.Button = Button;
exports.Checkbox = CheckboxComponent;
exports.DatePicker = DatePickerInput;
exports.FAB = FAB;
exports.FormError = FormError;
exports.Icon = Icon;
exports.If = If;
exports.Link = Link;
exports.LoadingIndicator = Loading;
exports.PasswordInput = PasswordInput;
exports.PinInput = PinInput;
exports.RadioButton = RadioButton;
exports.SearchInput = SearchInput;
exports.Shadow = Shadow;
exports.TextInput = TextInput$2;
exports.Touchable = CommonTouchable;
exports.Typography = Typography;
//# sourceMappingURL=index.js.map
