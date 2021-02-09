import React, { useRef, useEffect, useState, useCallback, useContext, useImperativeHandle } from 'react';
import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';
import { getTheme, ifStyle, switchStyle } from '@platformbuilders/helpers';
import Haptic from 'react-native-haptic';
import { Platform, TouchableOpacity, Animated, View as View$1, StyleSheet, Text as Text$2, Keyboard } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { isEmpty, head } from 'lodash';
import { TextInputMask } from 'react-native-masked-text';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, { Path } from 'react-native-svg';
import { ThemeContext } from 'styled-components';
import DefaultCodeInput from 'react-native-smooth-pincode-input';
import Animation from 'lottie-react-native';
import DefaultCheckbox from 'react-native-check-box';
import { lighten, darken } from 'polished';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import DefaultDatePicker from 'react-native-datepicker';
import { RNCamera } from 'react-native-camera';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-picker';
import Accordion from 'react-native-collapsible/Accordion';
import Markdown from 'react-native-markdown-display';

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
const isIOS = () => Platform.OS === IOS_PLATFORM;

const generateHaptic = (haptic = 'impact') => {
    if (isIOS()) {
        Haptic.generate(haptic);
    }
};

const scaledFontSize = (size, baselineFactor) => {
    const value = typeof size === 'string' ? parseInt(size, 10) : size;
    return RFValue(value, baselineFactor);
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const getFontSize = (props) => scaledFontSize(getTheme(`${props.variant}.fontSize`)(props));
const getLineHeight = (props) => scaledFontSize(getTheme(`${props.variant}.lineHeight`)(props));

const shadowRadius = `${moderateScale(4)}px`;
const getShadow = () => `
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: ${shadowRadius};
  elevation: 3;
`;

const Text = styled.Text `
  color: ${getTheme('text')};
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
`;

const Typography = (_a) => {
    var { style = [{}], textRef = React.createRef(), variant = 'body', children, id, accessibility } = _a, rest = __rest(_a, ["style", "textRef", "variant", "children", "id", "accessibility"]);
    return (React.createElement(Text, Object.assign({ testID: id, accessibilityLabel: accessibility, ref: textRef, style: style, variant: variant }, rest), children));
};

const isCentered = ifStyle('centered');
const isLarge = ifStyle('large');
const ErrorText = styled(Typography).attrs((props) => ({
    variant: isLarge('footnote', 'caption2')(props),
})) `
  color: ${getTheme('failure')};
  text-align: ${isCentered('center', 'left')};
  margin-top: ${isLarge(0, moderateScale(1))}px;
`;

const warnBoolean = () => 
// eslint-disable-next-line no-console
console.warn(`@platformbuilders/react-native-ui: received a truthy boolean error instead of string, which won't be rendered.`);
const FormError = (_a) => {
    var { id = 'form_error', accessibility, error = '', centered = false, large = false, children } = _a, rest = __rest(_a, ["id", "accessibility", "error", "centered", "large", "children"]);
    if (error && typeof error === 'boolean')
        warnBoolean();
    return (React.createElement(React.Fragment, null,
        children,
        error && typeof error === 'string' ? (React.createElement(ErrorText, Object.assign({ centered: centered, large: large, testID: `error_${id}`, accessibilityLabel: `Erro ${accessibility || error}` }, rest), error)) : null));
};

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

var InputStatus;
(function (InputStatus) {
    InputStatus["Success"] = "SUCCESS";
    InputStatus["Failure"] = "FAILURE";
    InputStatus["Default"] = "DEFAULT";
    InputStatus["Disabled"] = "DISABLED";
})(InputStatus || (InputStatus = {}));

const CommonTouchable = (_a) => {
    var { onPress = () => { }, haptic = 'impact', disabled = false, accessibility, id } = _a, rest = __rest(_a, ["onPress", "haptic", "disabled", "accessibility", "id"]);
    return (React.createElement(TouchableOpacity, Object.assign({}, rest, { accessibilityLabel: accessibility, testID: id, disabled: disabled, onPress: (e) => {
            generateHaptic(haptic);
            onPress(e);
        } })));
};

const Profile = ({ color = '#212121', width = 18, height = 18 }) => (React.createElement(Svg, { width: width, height: height, viewBox: "0 0 16 16", fill: "none" },
    React.createElement(Path, { d: "M7.97371 8.97934C10.3383 8.97934 12.2561 6.96553 12.2561 4.48278C12.2561 2.00003 10.3382 0 7.97371 0C5.60919 0 3.69128 2.01381 3.69128 4.48278C3.69128 6.95176 5.60917 8.97934 7.97371 8.97934ZM7.97371 1.17242C9.70769 1.17242 11.1264 2.66207 11.1264 4.48278C11.1264 6.3035 9.70769 7.79312 7.97371 7.79312C6.23973 7.79312 4.82099 6.30347 4.82099 4.48275C4.82099 2.66204 6.2397 1.17242 7.97371 1.17242Z", fill: color }),
    React.createElement(Path, { d: "M0.564855 16H15.4351C15.7504 16 16 15.7379 16 15.4069C16 12.3034 13.5961 9.7655 10.6273 9.7655H5.37275C2.41708 9.7655 0 12.2896 0 15.4069C0 15.7379 0.249586 16 0.564855 16ZM5.37275 10.9517H10.6273C12.7816 10.9517 14.555 12.6345 14.8309 14.8138H1.16912C1.44498 12.6483 3.2184 10.9517 5.37275 10.9517Z", fill: color })));

var Icons = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IconProfile: Profile
});

const Icon = (_a) => {
    var { id, accessibility, accessibilityLabel, testID, name = '', touchable = true, size = 20, color = undefined, style = [{}], onPress = () => { }, borderColor = '', backgroundColor = '', iconSets } = _a, rest = __rest(_a, ["id", "accessibility", "accessibilityLabel", "testID", "name", "touchable", "size", "color", "style", "onPress", "borderColor", "backgroundColor", "iconSets"]);
    const iconName = (name === null || name === void 0 ? void 0 : name.charAt(0).toUpperCase()) + (name === null || name === void 0 ? void 0 : name.slice(1));
    const Svg = iconSets ? iconSets[`Icon${iconName}`] : Icons[`Icon${iconName}`];
    return (React.createElement(Animated.View, { style: style },
        React.createElement(CommonTouchable, Object.assign({ id: id, accessibility: accessibility || iconName, accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id, disabled: !touchable, onPress: onPress }, rest),
            React.createElement(View$1, null, Svg ? (React.createElement(Svg, { width: size, height: size, color: color, borderColor: borderColor, backgroundColor: backgroundColor })) : (React.createElement(MaterialIcons, { name: name, color: color, size: size }))))));
};

// const factor = 1.2;
// const normalTextSize = moderateScale(16, factor);
// const normalPlaceholderSize = moderateScale(14, factor);
// const bigTextSize = moderateScale(24, factor);
// const bigPlaceholderSize = moderateScale(20, factor);
// const placeholderVariant = (props: any) => getFontSize('subhead')(props);
// const placeholderBigVariant = 'title4';
const isLeftIcon = ifStyle('leftIcon');
const isMultiline = ifStyle('multiline');
const isCentered$1 = ifStyle('centered');
const hasLabel = ifStyle('label');
const hasError = ifStyle('error');
const isContrast = ifStyle('contrast');
const switchStatus = switchStyle('status');
const primaryContrast = getTheme('primary.contrast');
const primaryMain = getTheme('primary.main');
const smallSpacing = getTheme('smallSpacing');
const mediumSpacing = getTheme('mediumSpacing');
const success = getTheme('success');
const textColor = getTheme('text');
const failure = getTheme('failure');
const disabled = getTheme('disabled');
const inputColor = (props) => switchStatus({
    [InputStatus.Success]: success,
    [InputStatus.Failure]: failure,
    [InputStatus.Default]: isContrast(primaryContrast, textColor)(props),
    [InputStatus.Disabled]: disabled,
});
const LABEL_UPPER_STYLE = {
    top: -10,
    fontSize: scaledFontSize(14),
};
const LABEL_LOWER_STYLE = {
    top: 20,
    fontSize: scaledFontSize(18),
};
const Wrapper = styled.View `
  justify-content: ${hasLabel('flex-end', 'flex-start')};
  padding-top: ${hasLabel(smallSpacing, 0)};
  position: relative;
`;
const InputAreaWrapper = styled.View `
  padding-top: ${({ padding }) => (!!padding && `${padding}px`) || smallSpacing};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const TextLabel = styled.Text `
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
  position: absolute;
  color: ${inputColor};
  top: ${LABEL_LOWER_STYLE.top}px;
`;
const Label = Animated.createAnimatedComponent(TextLabel);
const TextInput = styled.TextInput.attrs((props) => ({
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
  min-height: ${moderateScale(24)}px;
  color: ${inputColor};
  margin-top: ${isMultiline(mediumSpacing, 0)};
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
`;
const BottomLine = styled.View `
  height: ${StyleSheet.hairlineWidth}px;
  background-color: ${inputColor};
`;
const Icon$1 = styled(Icon).attrs((props) => ({
    color: hasError(failure(props), props.iconColor ||
        isContrast(primaryContrast(props), primaryMain(props))(props))(props),
})) `
  padding-right: ${isLeftIcon(moderateScale(10), 0)}px;
`;

const Input = TextInput.withComponent(TextInputMask);
const TextInput$1 = styled(Input).attrs((props) => ({
    placeholderTextColor: props.placeholderTextColor
        ? props.placeholderTextColor
        : '#72727260',
})) ``;

const MaskedTextInput = (_a) => {
    var { maskType, inputRef, id, accessibility, contrast = false, multiline = false, status = InputStatus.Default } = _a, props = __rest(_a, ["maskType", "inputRef", "id", "accessibility", "contrast", "multiline", "status"]);
    return (React.createElement(TextInput$1, Object.assign({}, props, { id: id, status: status, accessibility: accessibility, testID: id, accessibilityLabel: accessibility, ref: inputRef, contrast: contrast, multiline: multiline, type: maskType, underlineColorAndroid: "transparent" })));
};

const TextInput$2 = (_a) => {
    var { id, accessibility, accessibilityLabel, testID, large = false, contrast = false, centered = false, borderless = false, multiline = false, autoFocus = false, allowFontScaling = false, keyboardType = 'default', iconSize = 20, iconTouchableEnabled = false, status = InputStatus.Default, maskType = null, iconName = '', label = '', value = '', placeholder = '', error = '', style = {}, textStyle = {}, labelStyle = {}, iconHitSlop = {}, inputRef = useRef(null), onBlur = () => { }, onFocus = () => { }, onChangeText = () => { }, onPressIcon = () => { }, leftIcon = false, iconColor, inputPadding } = _a, rest = __rest(_a, ["id", "accessibility", "accessibilityLabel", "testID", "large", "contrast", "centered", "borderless", "multiline", "autoFocus", "allowFontScaling", "keyboardType", "iconSize", "iconTouchableEnabled", "status", "maskType", "iconName", "label", "value", "placeholder", "error", "style", "textStyle", "labelStyle", "iconHitSlop", "inputRef", "onBlur", "onFocus", "onChangeText", "onPressIcon", "leftIcon", "iconColor", "inputPadding"])
    // eslint-disable-next-line sonarjs/cognitive-complexity
    ;
    const [labelAnimatedStyle] = useState({
        top: new Animated.Value(LABEL_LOWER_STYLE.top),
        fontSize: new Animated.Value(LABEL_LOWER_STYLE.fontSize),
    });
    const [isPlaceholder, setIsPlaceHolder] = useState(true);
    const previousValue = usePrevious(value || '');
    const labelVariant = large ? 'subhead' : 'footnote';
    const textVariant = large ? 'title2' : 'headline';
    const placeholderVariant = large ? 'title3' : 'body';
    const animateComponent = useCallback((updatedLabelStyle) => {
        const animations = Object.keys(updatedLabelStyle).map((animationProp) => Animated.timing(labelAnimatedStyle[animationProp], {
            toValue: updatedLabelStyle[animationProp],
            duration: 200,
            useNativeDriver: false,
        }));
        Animated.parallel(animations).start();
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
        return (React.createElement(MaskedTextInput, Object.assign({ inputRef: inputRef, maskType: maskType || 'no-mask', accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id }, textInputProps)));
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
    useEffect(() => {
        setAnimation();
    }, [value, previousValue]);
    const hasError = !isEmpty(error);
    const icon = iconName;
    const renderStatus = hasError ? InputStatus.Failure : status;
    const renderIcon = (iconProp) => (React.createElement(Icon$1, { id: `id_${iconProp}`, accessibility: `icon_${accessibility}`, size: iconSize, name: iconProp || '', contrast: contrast, error: hasError, touchable: iconTouchableEnabled, onPress: onPressIcon, hitSlop: iconHitSlop, leftIcon: leftIcon, iconColor: iconColor }));
    return (React.createElement(Wrapper, { style: style, multiline: multiline },
        React.createElement(FormError, { id: id, accessibility: accessibility, centered: centered, error: error, large: large },
            !centered && (React.createElement(Label, { status: status, contrast: contrast, style: [labelAnimatedStyle, labelStyle], variant: isPlaceholder ? placeholderVariant : labelVariant, testID: `error_${id}`, accessibilityLabel: `Erro ${accessibility}` }, label)),
            React.createElement(InputAreaWrapper, { multiline: multiline, padding: inputPadding },
                leftIcon && !isEmpty(icon) && renderIcon(icon),
                renderTextInput(renderStatus),
                !leftIcon && !isEmpty(icon) && renderIcon(icon)),
            !borderless && React.createElement(BottomLine, { status: status, contrast: contrast }))));
};

const hasError$1 = ifStyle('error');
const isContrast$1 = ifStyle('contrast');
const isCentered$2 = ifStyle('centered');
const failure$1 = getTheme('failure');
const primaryMain$1 = getTheme('primary.main');
const disabledDark = getTheme('primary.Dark');
const primaryContrast$1 = getTheme('primary.contrast');
const mediumSpacing$1 = getTheme('mediumSpacing');
const defaultStyling = (theme) => ({
    cellStyle: {
        borderRadius: moderateScale(8),
        borderColor: theme ? disabledDark(theme) : '#eeeeee',
        borderWidth: 2,
    },
    cellStyleFocused: {
        borderColor: theme ? primaryMain$1(theme) : '#eeeeee',
    },
    textStyle: {
        fontSize: moderateScale(26),
        color: 'black',
    },
});
const Wrapper$1 = styled.View `
  align-items: center;
  flex-direction: row;
`;
const PinCodeInput = styled(DefaultCodeInput) ``;
const Icon$2 = styled(Icon).attrs((props) => ({
    color: hasError$1(failure$1(props), isContrast$1(primaryContrast$1(props), primaryMain$1(props))(props))(props),
})) `
  margin-left: ${mediumSpacing$1};
`;
const CaptionText = styled(Typography).attrs({
    variant: 'footnote',
}) `
  text-align: ${isCentered$2('center', 'left')};
  opacity: 0.67;
  font-weight: 300;
`;

const PinInput = (_a) => {
    var { password = false, animated = false, centered = false, contrast = false, mask = '•', codeLength = 4, cellSpacing = moderateScale(6), iconSize = moderateScale(24), cellSize = moderateScale(56), caption, error, value, onChangeText, onFulfill = () => { }, wrapperStyle } = _a, rest = __rest(_a, ["password", "animated", "centered", "contrast", "mask", "codeLength", "cellSpacing", "iconSize", "cellSize", "caption", "error", "value", "onChangeText", "onFulfill", "wrapperStyle"]);
    const [hidePassword, setHidePassword] = useState(true);
    const theme = useContext(ThemeContext);
    const defaultStyle = defaultStyling(theme);
    const changeText = (text) => {
        onChangeText(text);
        if (text.length === codeLength) {
            onFulfill(text);
        }
    };
    return (React.createElement(FormError, { centered: centered, error: error },
        React.createElement(Wrapper$1, { style: wrapperStyle },
            React.createElement(PinCodeInput, Object.assign({ value: value, onTextChange: changeText, password: password && hidePassword, mask: mask, codeLength: codeLength, animated: animated, cellSize: cellSize, cellSpacing: cellSpacing }, defaultStyle, rest)),
            password && (React.createElement(Icon$2, { id: "code_input_icon", accessibility: "Exibir ou ocultar inputs", name: hidePassword ? 'eye' : 'eye-off', size: iconSize, onPress: () => setHidePassword(!hidePassword), contrast: contrast, error: false }))),
        !!caption && React.createElement(CaptionText, { centered: centered }, caption)));
};

const PasswordInput = (props) => {
    const [hidePassword, setHidePassword] = useState(true);
    const hitSlop = {
        left: 40,
        right: 40,
        top: 40,
        bottom: 40,
    };
    const onPressShowPassword = useCallback(() => {
        setHidePassword(!hidePassword);
    }, [hidePassword]);
    return (React.createElement(TextInput$2, Object.assign({ secureTextEntry: hidePassword, iconName: hidePassword ? 'eye' : 'eye-off', iconTouchableEnabled: true, onPressIcon: onPressShowPassword, iconHitSlop: hitSlop }, props)));
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

const circularLoading = getTheme('circularLoading');
const contrastCircularLoading = getTheme('contrastCircularLoading');
const buttonLoading = getTheme('buttonLoading');
const contrastButtonLoading = getTheme('contrastButtonLoading');
const linearLoading = getTheme('linearLoading');
const contrastLinearLoading = getTheme('contrastLinearLoading');
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
    width: moderateScale(60),
    height: moderateScale(60),
};
const largeSize = {
    width: moderateScale(120),
    height: moderateScale(120),
};
const Indicator = styled(Animation).attrs((props) => ({
    source: loadingVariant(props),
    autoPlay: true,
    loop: true,
})) ``;

const Loading = (_a) => {
    var { large = false, contrast = false, variant = 'circular' } = _a, rest = __rest(_a, ["large", "contrast", "variant"]);
    return (React.createElement(Indicator, Object.assign({ testID: "loading", accessibilityLabel: "Aguarde", variant: variant, contrast: contrast, style: large ? largeSize : smallSize }, rest)));
};

const disabledMain = getTheme('disabled.main');
const disabledContrast = getTheme('disabled.contrast');
const primaryMain$2 = getTheme('primary.main');
const primaryContrast$2 = getTheme('primary.contrast');
const secondaryMain = getTheme('secondary.main');
const secondaryContrast = getTheme('secondary.contrast');
const tertiaryMain = getTheme('tertiary.main');
const tertiaryContrast = getTheme('tertiary.contrast');
const accentMain = getTheme('accent.main');
const accentContrast = getTheme('accent.contrast');
const buttonRadius = getTheme('buttonRadius');
const buttonSize = moderateScale(48);
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
const Touchable = styled(CommonTouchable) `
  border-radius: ${(props) => (props.rounded ? '50px' : '0')};
`;
const ButtonWrapper = styled.View `
  height: ${buttonSize}px;
  flex-direction: row;
  align-items: center;
  margin-vertical: ${moderateScale(6)}px;
  min-width: ${moderateScale(180)}px;
  padding: ${(props) => (props.rounded ? '0' : '10px 11px')};
  border-radius: ${(props) => props.rounded ? `${buttonSize / 2}px` : buttonRadius(props)};
  justify-content: center;
  background-color: ${getBackgroundColor};
  border-color: ${getTextColor};
  border: ${(props) => props.variant === 'flat' ? `1px solid ${getTextColor(props)}` : '0'};
`;
const TextButton = styled(Typography) `
  letter-spacing: 0.4px;
  color: ${getTextColor};
  font-weight: 500;
`;
const Loading$1 = styled(Loading).attrs({
    variant: 'button',
}) `
  align-self: center;
  width: ${moderateScale(55)}px;
`;

const Button = ({ id, children, onPress, accessibility, accessibilityLabel, testID, style = [{}], textStyle = {}, disabled = false, rounded = false, loading = false, contrast = false, variant = 'primary', typographyVariant = 'body', }) => {
    return (React.createElement(Touchable, { id: id, accessibility: accessibility, accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id, disabled: loading || disabled, onPress: onPress, rounded: rounded },
        React.createElement(ButtonWrapper, { variant: variant, style: style, disabled: disabled, rounded: rounded },
            loading && React.createElement(Loading$1, { contrast: contrast }),
            !loading && (React.createElement(React.Fragment, null,
                React.createElement(TextButton, { style: textStyle, disabled: disabled, variant: typographyVariant }, children))))));
};

const If = ({ condition, children }) => condition ? children : null;

const primaryContrast$3 = getTheme('primary.contrast');
const accentMain$1 = getTheme('accent.main');
const isRelative = ifStyle('relativePos');
const Wrapper$2 = styled(CommonTouchable) `
  position: ${isRelative('relative', 'absolute')};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color || accentMain$1};
  border-radius: ${({ size }) => size / 2}px;
  ${({ hasShadow }) => (hasShadow ? getShadow() : {})}
`;
const Icon$3 = styled(Icon).attrs((props) => ({
    color: props.iconColor || primaryContrast$3(props),
    touchable: false,
    size: props.iconSize ? moderateScale(props.iconSize) : moderateScale(24),
})) ``;
const Title = styled(Typography).attrs({
    variant: 'subhead',
}) `
  color: ${primaryContrast$3};
  font-weight: 700;
`;

const FAB = (_a) => {
    var { size = moderateScale(70), id, accessibility, title, color, iconName, iconColor, iconSize, onPress, relativePos = false, hasShadow = false } = _a, rest = __rest(_a, ["size", "id", "accessibility", "title", "color", "iconName", "iconColor", "iconSize", "onPress", "relativePos", "hasShadow"]);
    return (React.createElement(Wrapper$2, Object.assign({ id: id, accessibility: accessibility, onPress: onPress, size: size, color: color, relativePos: relativePos, hasShadow: hasShadow }, rest),
        React.createElement(Icon$3, { id: id, name: iconName || 'plus', accessibility: accessibility, iconColor: iconColor, iconSize: iconSize }),
        React.createElement(If, { condition: !isEmpty(title) },
            React.createElement(Title, null, title))));
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
        light: lighten(0.05, disabled$1),
        main: disabled$1,
        dark: darken(0.3, disabled$1),
        contrast: '#cccccc',
    },
    primary: {
        light: lighten(0.05, primary),
        main: primary,
        dark: darken(0.12, primary),
        contrast: '#ffffff',
    },
    secondary: {
        light: lighten(0.05, secondary),
        main: secondary,
        dark: darken(0.1, secondary),
        contrast: '#ffffff',
    },
    tertiary: {
        light: lighten(0.15, tertiary),
        main: tertiary,
        dark: darken(0.1, tertiary),
        contrast: '#ffffff',
    },
    accent: {
        light: lighten(0.05, accent),
        main: accent,
        dark: darken(0.05, accent),
        contrast: '#ffffff',
    },
};

({
    topSpacing: `${getStatusBarHeight()}px`,
    bottomSpacing: `${isIphoneX() ? moderateScale(10) : 0}px`,
    sceneSpacing: `${moderateScale(24)}px`,
    sectionSpacing: `${moderateScale(40)}px`,
    minimumSpacing: `${moderateScale(4)}px`,
    smallSpacing: `${moderateScale(12)}px`,
    mediumSpacing: `${moderateScale(20)}px`,
    largeSpacing: `${moderateScale(24)}px`,
    giantSpacing: `${moderateScale(72)}px`,
});

({
    smallRadius: `${moderateScale(3)}px`,
    mediumRadius: `${moderateScale(8)}px`,
    largeRadius: `${moderateScale(15)}px`,
    modalRadius: `${moderateScale(20)}px`,
    buttonRadius: `${moderateScale(7)}px`,
});

const Wrapper$3 = styled.View ``;
const defaultLabelStyle = {
    fontSize: 16,
    color: colors.primary.contrast,
    opacity: 0.7,
};
const containerStyle = {
    marginBottom: 0,
};
const CheckBox = styled(DefaultCheckbox) ``;

const CheckboxComponent = ({ id, accessibility, label = '', error = '', labelBefore = '', checked = false, onPress = () => { }, labelStyle = defaultLabelStyle, checkBoxColor, checkedCheckBoxColor, uncheckedCheckBoxColor, style, }) => (React.createElement(FormError, { id: id, accessibility: accessibility, error: error },
    React.createElement(Wrapper$3, { style: style },
        React.createElement(CheckBox, { testID: `check_${id}`, accessibilityLabel: `Check ${accessibility}`, style: containerStyle, isChecked: checked, rightText: label, rightTextStyle: labelStyle, leftText: labelBefore, onClick: onPress, checkBoxColor: checkBoxColor, checkedCheckBoxColor: checkedCheckBoxColor, uncheckedCheckBoxColor: uncheckedCheckBoxColor }))));

const View = styled.View `
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  elevation: 3;
  shadow-radius: 4px;
`;

const Shadow = (_a) => {
    var { children, hasShadow = true } = _a, rest = __rest(_a, ["children", "hasShadow"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(If, { condition: hasShadow },
            React.createElement(View, Object.assign({}, rest), children)),
        React.createElement(If, { condition: !hasShadow },
            React.createElement(View$1, Object.assign({}, rest), children))));
};

const getStatusStyle = switchStyle('status');
const primaryContrast$4 = getTheme('primary.contrast');
const primaryDark = getTheme('primary.dark');
const disabled$2 = getTheme('disabled.main');
const inputMainColor = (props) => getStatusStyle({
    [InputStatus.Success]: getTheme('success'),
    [InputStatus.Failure]: getTheme('failure'),
    [InputStatus.Default]: props.dark ? primaryDark : primaryContrast$4,
    [InputStatus.Disabled]: disabled$2,
});
const LABEL_UPPER_STYLE$1 = {
    top: 8,
    fontSize: 14,
};
const LABEL_LOWER_STYLE$1 = {
    top: 40,
    fontSize: 18,
};
const TextLabel$1 = styled.Text `
  line-height: 19px;
  padding-bottom: 15px;
  color: ${(props) => props.dark ? primaryDark(props) : primaryContrast$4(props)};
`;
const Label$1 = Animated.createAnimatedComponent(TextLabel$1);
const DatePicker = styled(DefaultDatePicker) `
  width: 100%;
`;
const BottomLine$1 = styled.View `
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
    const [labelAnimatedStyle] = useState({
        top: new Animated.Value(LABEL_LOWER_STYLE$1.top),
        fontSize: new Animated.Value(LABEL_LOWER_STYLE$1.fontSize),
    });
    const [date, setDate] = useState('');
    const [isPlaceholder, setIsPlaceHolder] = useState(true);
    const execAnimation = useCallback(() => {
        const animations = Object.keys(LABEL_UPPER_STYLE$1).map((animationProp) => Animated.timing(labelAnimatedStyle[animationProp], {
            toValue: LABEL_UPPER_STYLE$1[animationProp],
            duration: 200,
            useNativeDriver: false,
        }));
        setIsPlaceHolder(false);
        Animated.parallel(animations).start();
    }, [Animated, labelAnimatedStyle]);
    const updateDate = useCallback((updatedDate) => {
        setDate(updatedDate);
        execAnimation();
        if (onDateChange) {
            onDateChange(updatedDate);
        }
    }, [onDateChange]);
    useEffect(() => {
        if (value) {
            execAnimation();
        }
    }, [value]);
    const customStyles = error
        ? Object.assign(Object.assign({}, DatePickerStyles), { dateInput: { borderColor: '#cc0000' } }) : dark
        ? DatePickerStylesDark
        : DatePickerStyles;
    return (React.createElement(FormError, { id: id, accessibility: accessibility, error: error },
        React.createElement(Label$1, { error: error || '', style: labelAnimatedStyle, isPlaceholder: isPlaceholder, dark: dark }, label),
        React.createElement(DatePicker, { mode: mode, androidMode: androidMode, locale: locale, placeholder: " ", format: format, editable: !editable, date: date, customStyles: customStyles, maxDate: maxDate, testID: testID, confirmBtnText: confirmBtnText, cancelBtnText: cancelBtnText, onDateChange: updateDate, showIcon: false, dark: dark }),
        React.createElement(BottomLine$1, { dark: dark })));
};

var img = "data:image/png;base64,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";

const accentMain$2 = getTheme('accent.main');
const accentContrast$1 = getTheme('accent.contrast');
const showBorder = ifStyle('showBorder');
const hasBorderWidth = ifStyle('borderWidth');
const hasBorderColor = ifStyle('borderColor');
const Wrapper$4 = styled(CommonTouchable) `
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  overflow: hidden;
  border-width: ${(props) => showBorder(hasBorderWidth(props.borderWidth, '2'), '0')}px;
  border-color: ${(props) => hasBorderColor(props.borderColor, accentMain$2)};
  position: relative;
`;
const UploadIconWrapper = styled.View `
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size / 4}px;
  height: ${(props) => props.size / 4}px;
  border-radius: ${(props) => props.size / 8}px;
  position: absolute;
  z-index: 2;
  background-color: ${accentMain$2};
`;
const UploadIcon = styled(Icon).attrs({ name: 'camera' }) `
  color: ${accentContrast$1};
`;
const CameraView = styled(RNCamera) `
  width: ${(props) => props.size}px;
  height: 100%;
  border-radius: ${(props) => props.size / 2}px;
  overflow: hidden;
  border: ${showBorder('4px solid white', '')};
`;

const Avatar = React.forwardRef((_a, ref) => {
    var { id, image = img, accessibility = 'Upload de Avatar', accessibilityLabel, testID, size = 50, onPress, onUpload, showBorder = true, displayCamera = false } = _a, rest = __rest(_a, ["id", "image", "accessibility", "accessibilityLabel", "testID", "size", "onPress", "onUpload", "showBorder", "displayCamera"]);
    const [uploadedImage, setUploadedImage] = useState();
    const cameraRef = useRef();
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
            ImagePicker.launchImageLibrary(options, (response) => {
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
        if (image && !isEmpty(image)) {
            return { uri: image };
        }
        return img;
    };
    useImperativeHandle(ref, () => ({
        getUploadImage,
        clearUploadImage,
        takePicture,
        openPicker,
    }));
    return (React.createElement(Wrapper$4, Object.assign({ id: id, accessibility: accessibility, accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id, size: size, onPress: onPress, disabled: !onPress, showBorder: showBorder }, rest),
        displayCamera && !uploadedImage ? (React.createElement(CameraView, { ref: cameraRef, size: size, type: RNCamera.Constants.Type.front, flashMode: RNCamera.Constants.FlashMode.auto, androidCameraPermissionOptions: {
                title: 'Câmera',
                message: 'Precisamos da sua permissão para usar a câmera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancelar',
            } })) : (React.createElement(FastImage, { source: getCurrentAvatar(), resizeMode: FastImage.resizeMode.cover, style: { width: '101%', height: '101%' } })),
        React.createElement(If, { condition: !!displayCamera },
            React.createElement(UploadIconWrapper, { size: size },
                React.createElement(UploadIcon, { id: "", accessibility: "" })))));
});
Avatar.displayName = 'AvatarComponent';

const primaryContrast$5 = getTheme('primary.contrast');
const Text$1 = styled(Typography) `
  font-weight: 500;
  color: ${primaryContrast$5};
  text-decoration-color: ${primaryContrast$5};
  text-decoration-line: underline;
`;

const Link = (_a) => {
    var { id, onPress, children, accessibility, accessibilityLabel, testID, variant = 'body', style } = _a, rest = __rest(_a, ["id", "onPress", "children", "accessibility", "accessibilityLabel", "testID", "variant", "style"]);
    return (React.createElement(CommonTouchable, Object.assign({ id: id, onPress: onPress, accessibility: accessibility, accessibilityLabel: accessibilityLabel || accessibility, testID: testID || id }, rest),
        React.createElement(Text$1, { testID: `text_${id}`, accessibilityLabel: `Texto ${accessibility}`, style: style, variant: variant }, children)));
};

const Icon$4 = styled(Icon).attrs({
    touchable: false,
    size: moderateScale(24),
}) ``;

const AccordionContainer = ({ StyledTitle = Text$2, StyledBody = Text$2, StyledHeader = View$1, StyledContent = View$1, data, hasIcon = false, iconUpName = 'chevron-up', iconDownName = 'chevron-down', activeIconColor, inactiveIconColor, isMarkdown = false, onChange, }) => {
    const [activeSections, setActiveSections] = useState([]);
    const isActive = (section) => {
        const element = (item) => item.title === section.title;
        const index = data.findIndex(element);
        return index.toString() === activeSections.join('');
    };
    const getIconName = (section) => isActive(section) ? iconUpName : iconDownName;
    const renderHeader = (section) => {
        return (React.createElement(StyledHeader, { isActive: isActive(section) },
            React.createElement(StyledTitle, { isActive: isActive(section) }, section.title),
            React.createElement(If, { condition: hasIcon },
                React.createElement(Icon$4, { name: getIconName(section), color: isActive(section) ? activeIconColor : inactiveIconColor, id: iconUpName, accessibility: isActive(section) ? 'Fechar' : 'Abrir' }))));
    };
    const renderContent = (section) => {
        return (React.createElement(StyledContent, null,
            React.createElement(If, { condition: isMarkdown },
                React.createElement(Markdown, null, section.content)),
            React.createElement(If, { condition: !isMarkdown },
                React.createElement(StyledBody, null, section.content))));
    };
    const handleChange = (activeSectionsArray) => {
        const index = head(activeSectionsArray) || 0;
        if (onChange)
            onChange(data[index].title);
        setActiveSections(activeSectionsArray);
    };
    return (React.createElement(Accordion, { sections: data, activeSections: activeSections, renderHeader: renderHeader, renderContent: renderContent, onChange: handleChange }));
};

const textColor$1 = getTheme('text');
const hasColor = ifStyle('radioButtonColor');
const hasCheckedColor = ifStyle('checkedRadioButtonColor');
const Radio = styled(CommonTouchable) `
  width: ${({ size }) => moderateScale(size)}px;
  height: ${({ size }) => moderateScale(size)}px;
  border-radius: ${({ size }) => moderateScale(size / 2)}px;
  border: ${moderateScale(1)}px
    ${({ radioButtonColor }) => hasColor(radioButtonColor, textColor$1)};
  align-items: center;
  justify-content: center;
`;
const CheckedRadio = styled.View `
  width: ${({ internalSize }) => moderateScale(internalSize)}px;
  height: ${({ internalSize }) => moderateScale(internalSize)}px;
  background-color: ${({ checkedRadioButtonColor }) => hasCheckedColor(checkedRadioButtonColor, textColor$1)};
  border-radius: ${({ internalSize }) => moderateScale(internalSize / 2)}px;
`;

const RadioButton = ({ id, accessibility, radioButtonColor, checkedRadioButtonColor, size = 18, internalSize = 13, checked = false, onPress = () => { }, }) => (React.createElement(Radio, { id: id, accessibility: accessibility, onPress: onPress, radioButtonColor: radioButtonColor, size: size },
    React.createElement(If, { condition: checked },
        React.createElement(CheckedRadio, { checkedRadioButtonColor: checkedRadioButtonColor, internalSize: internalSize }))));

const disabled$3 = getTheme('disabled.main');
const primaryContrast$6 = getTheme('primary.contrast');
const largeSpacing = getTheme('largeSpacing');
const largeRadius = getTheme('largeRadius');
const wrapperHeight = moderateScale(56);
const Wrapper$5 = styled.View `
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
const Input$1 = styled(TextInput$2).attrs((props) => ({
    iconColor: `${props.iconColor || disabled$3(props)}`,
    iconTouchableEnabled: true,
    iconSize: props.iconSize || moderateScale(26),
})) `
  width: 100%;
  padding: 0;
  height: ${({ inputHeight }) => (!!inputHeight && inputHeight) || '90%'};
`;

const SearchInput = ({ id, accessibility, onChange, onClear = () => null, onFocus = () => null, onBlur = () => null, leftIcon = false, iconColor, placeholder, wrapperHeight, inputPadding, iconSize, hasShadow = false, inputStyle, containerStyle, placeholderTextColor, textStyle, onSubmit = () => null, autoFocus = false, }) => {
    const [searchText, setSearchText] = useState('');
    const [isSearching, setSearching] = useState(false);
    const [isFocused, setFocused] = useState(false);
    const ref = useRef(null);
    return (React.createElement(Wrapper$5, { height: wrapperHeight, inputPadding: inputPadding, hasShadow: hasShadow, style: containerStyle },
        React.createElement(Input$1, { textStyle: textStyle, placeholderTextColor: placeholderTextColor, style: inputStyle, inputRef: ref, borderless: true, large: false, id: id, accessibility: accessibility, autoFocus: autoFocus, autoCapitalize: "none", autoCorrect: false, iconName: isFocused || !!searchText ? 'close' : 'magnify', autoCompleteType: "off", placeholder: isSearching ? '' : placeholder || 'Pesquise aqui', onChangeText: (value) => {
                setSearchText(value);
                onChange(value);
            }, onPressIcon: () => {
                setSearchText('');
                onClear();
                setSearching(false);
                Keyboard.dismiss();
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

export { AccordionContainer as Accordion, Avatar, Button, CheckboxComponent as Checkbox, DatePickerInput as DatePicker, FAB, FormError, Icon, If, InputStatus, Link, Loading as LoadingIndicator, PasswordInput, PinInput, RadioButton, SearchInput, Shadow, TextInput$2 as TextInput, CommonTouchable as Touchable, Typography };
//# sourceMappingURL=index.esm.js.map
