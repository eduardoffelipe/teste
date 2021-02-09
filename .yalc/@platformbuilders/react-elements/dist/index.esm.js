import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Paper as Paper$1, Typography as Typography$1, Button as Button$1, CircularProgress, TextField, Checkbox as Checkbox$1, FormControlLabel } from '@material-ui/core';
import { getTheme, ifStyle, pxToRem, toOnlyNumbers } from '@platformbuilders/helpers';
import IconButton from '@material-ui/core/IconButton';
import MaterialIcon from '@material-ui/core/Icon';
import MaterialAvatar from '@material-ui/core/Avatar';
import Animation from 'react-lottie';
import TextInputMask from 'react-input-mask';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { Formik } from 'formik';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select$1 from '@material-ui/core/Select';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        const { location } = this.props;
        if (location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        const { children } = this.props;
        return children;
    }
}
var index = withRouter(ScrollToTop);

const If = ({ condition, children }) => condition ? children : null;

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

const CustomTouchable = styled(ButtonBase) ``;

const Touchable = (_a) => {
    var { children, onPress } = _a, rest = __rest(_a, ["children", "onPress"]);
    return (React.createElement(CustomTouchable, Object.assign({ onClick: onPress }, rest), children));
};

const ObjectType = {
    STRING: '[object String]',
};
const getType = (value) => {
    return Object.prototype.toString.call(value);
};
const isString = (value) => getType(value) === ObjectType.STRING;

const Wrapper = styled(Paper$1) `
  padding: ${getTheme('largeSpacing')}px;
`;

const Paper = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return (React.createElement(Wrapper, Object.assign({}, rest), children));
};

const Icon = (_a) => {
    var { name, color = 'inherit', size = 'default' } = _a, rest = __rest(_a, ["name", "color", "size"]);
    return (React.createElement(IconButton, Object.assign({ color: "inherit", edge: "start" }, rest),
        React.createElement(MaterialIcon, { color: color, fontSize: size }, name)));
};

const DefaultAvatar = styled((_a) => {
    var { onPress } = _a, rest = __rest(_a, ["onPress"]);
    return (React.createElement(Touchable, { onPress: onPress },
        React.createElement(MaterialAvatar, Object.assign({}, rest))));
}) ``;

const Avatar = (_a) => {
    var { src, alt = '', variant = 'circle', onPress } = _a, rest = __rest(_a, ["src", "alt", "variant", "onPress"]);
    return (React.createElement(DefaultAvatar, Object.assign({ alt: alt, src: src, variant: variant, onPress: onPress }, rest)));
};

const CustomTypography = styled(Typography$1) ``;

const Typography = (_a) => {
    var { variant, children } = _a, rest = __rest(_a, ["variant", "children"]);
    return (React.createElement(CustomTypography, Object.assign({ variant: variant }, rest), children));
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
var loading = {
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

var Sizes;
(function (Sizes) {
    Sizes[Sizes["small"] = 30] = "small";
    Sizes[Sizes["medium"] = 45] = "medium";
    Sizes[Sizes["large"] = 60] = "large";
})(Sizes || (Sizes = {}));
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};
const LoadingIndicator = ({ size = 'medium' }) => (React.createElement(Animation, { options: defaultOptions, isStopped: false, isPaused: false, height: Sizes[size], width: Sizes[size] }));

const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const secondaryMain = getTheme('secondary.main');
const secondaryContrast = getTheme('secondary.contrast');
const StyledButton = styled((props) => (React.createElement(Button$1, Object.assign({}, props, { secondary: undefined })))) `
  min-width: 155px;
  border-radius: 50px;
  padding: 12px;
  color: ${(props) => props.secondary ? secondaryContrast(props) : primaryContrast(props)};
  border: 0;
  background: ${(props) => props.secondary ? secondaryMain(props) : primaryMain(props)};
  :hover {
    background: ${(props) => props.secondary ? secondaryMain(props) : primaryMain(props)};
  }
`;
const LoadingIndicator$1 = styled((props) => (React.createElement(CircularProgress, Object.assign({}, props, { secondary: undefined, size: 20 })))) `
  color: ${(props) => props.secondary ? secondaryContrast(props) : primaryContrast(props)};
`;

const Button = (_a) => {
    var { children, type, onPress, loading = false, disabled = false, secondary = false } = _a, rest = __rest(_a, ["children", "type", "onPress", "loading", "disabled", "secondary"]);
    return (React.createElement(StyledButton, Object.assign({ onClick: onPress, disabled: disabled, secondary: secondary || undefined, type: type || undefined }, rest),
        React.createElement(If, { condition: !!loading },
            React.createElement(LoadingIndicator$1, { secondary: secondary || undefined })),
        React.createElement(If, { condition: !loading }, children)));
};

const textColor = getTheme('text');
const primaryMain$1 = getTheme('primary.main');
const smallSpacing = getTheme('smallSpacing');
const failureColor = getTheme('failure');
const hasError = ifStyle('selected');
const Wrapper$1 = styled.div `
  position: relative;
`;
const Input = styled.input `
  font-size: ${pxToRem(16)};
  padding: ${smallSpacing} 0;
  display: block;
  width: ${pxToRem(300)};
  border: none;
  border-bottom: ${pxToRem(1)} solid ${textColor}80;
  color: ${hasError(failureColor, textColor)};

  :focus {
    outline: none;
  }

  :focus ~ label {
    top: ${pxToRem(-20)};
    font-size: ${pxToRem(14)};
    color: ${primaryMain$1};
  }

  :valid ~ label {
    top: ${pxToRem(-20)};
    font-size: ${pxToRem(14)};
  }

  :focus ~ .bar:before,
  :focus ~ .bar:after {
    width: 50%;
  }
`;
const Bar = styled.span `
  position: absolute;
  bottom: ${pxToRem(-1)};
  display: block;
  width: 100%;

  :before,
  :after {
    content: '';
    height: ${pxToRem(2)};
    width: 0;
    bottom: ${pxToRem(1)};
    position: absolute;
    background: ${hasError(failureColor, primaryMain$1)};
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  :before {
    left: 50%;
    width: ${hasError('50%', 0)};
  }

  :after {
    right: 50%;
    width: ${hasError('50%', 0)};
  }
`;
const Label = styled.label `
  color: ${hasError(failureColor, textColor)};
  font-size: ${pxToRem(18)};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  top: ${pxToRem(10)};
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

const defaultMaskOptions = {
    prefix: 'R$ ',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2,
};
const CurrencyInputComponent = ({ error, label, id, name, onChangeText, value, }) => {
    const currencyMask = createNumberMask(defaultMaskOptions);
    const handleChange = (event) => {
        if (onChangeText && event.target.value) {
            onChangeText(Object.assign(Object.assign({}, event), { target: Object.assign(Object.assign({}, event.target), { value: toOnlyNumbers(event.target.value) }) }));
        }
    };
    return (React.createElement(FormError, { error: error },
        React.createElement(Wrapper$1, null,
            React.createElement(MaskedInput, { mask: currencyMask, placeholder: "R$ 0,00", id: id, name: name, value: value, onChange: handleChange, render: (ref, props) => React.createElement(Input, Object.assign({ ref: ref, error: error }, props)) }),
            React.createElement(Bar, { className: "bar", error: error }),
            React.createElement(Label, { error: error }, label))));
};

const primaryMain$2 = getTheme('primary.main');
const Input$1 = styled(TextField) `
  border-color: red;
  & label {
    font-size: 1em;
  }
  & label.Mui-focused {
    color: ${primaryMain$2};
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${primaryMain$2};
  }
`;
const InputWrapper = styled.div `
  flex-direction: column;
`;

var Mask;
(function (Mask) {
    Mask["cep"] = "99999-999";
    Mask["cpf"] = "999.999.999-99";
    Mask["cnpj"] = "99.999.999/9999-99";
    Mask["birthdate"] = "99/99/9999";
    Mask["phone"] = "(99) 9999-9999";
    Mask["cellphone"] = "(99) 99999-9999";
})(Mask || (Mask = {}));
const TextInput = (_a) => {
    var { mask, maskType = '', error = '', onChange, maxlength } = _a, rest = __rest(_a, ["mask", "maskType", "error", "onChange", "maxlength"]);
    const renderTextInput = () => {
        const hasMask = mask || maskType;
        const maskOption = Mask[maskType] || mask;
        return maskType === 'currency' ? (React.createElement(CurrencyInputComponent, Object.assign({}, rest, { onChangeText: onChange }))) : hasMask ? (React.createElement(TextInputMask, Object.assign({ mask: maskOption, onChange: onChange }, rest), (inputProps) => (React.createElement(Input$1, Object.assign({ margin: "normal" }, inputProps, { inputProps: { maxLength: maxlength } }))))) : (React.createElement(Input$1, Object.assign({}, rest, { margin: "normal", onChange: onChange, error: !!error, inputProps: { maxLength: maxlength } })));
    };
    return (React.createElement(InputWrapper, Object.assign({}, rest),
        React.createElement(FormError, { error: error }, renderTextInput())));
};

const ErrorText = styled(Typography).attrs({ variant: 'caption' }) `
  color: ${getTheme('failure')};
`;

const FormError = (_a) => {
    var { children, error } = _a, rest = __rest(_a, ["children", "error"]);
    const isErrorValid = isString(error);
    return (React.createElement(React.Fragment, null,
        children,
        isErrorValid && React.createElement(ErrorText, Object.assign({}, rest), error)));
};

const FormContainer = (_a) => {
    var { validateOnChange, validationSchema, initialValues, onSubmit, children } = _a, rest = __rest(_a, ["validateOnChange", "validationSchema", "initialValues", "onSubmit", "children"]);
    return (React.createElement(Formik, Object.assign({ validateOnChange: validateOnChange, validationSchema: validationSchema, initialValues: initialValues, onSubmit: onSubmit }, rest), children));
};

const primaryMain$3 = getTheme('primary.main');
const Wrapper$2 = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;
const ColoredCheckbox = styled((props) => (React.createElement(Checkbox$1, Object.assign({ color: "default", checked: props.checked, onChange: props.onChange }, props)))) `
  color: ${primaryMain$3};
  & .Mui-checked {
    color: green;
  }
`;
const StyledCheckbox = styled((props) => (React.createElement(FormControlLabel, { control: React.createElement(ColoredCheckbox, { checked: props.checked, onChange: props.onChange }), label: props.label }))) ``;

const Checkbox = ({ checked, onChange, label, name, error, }) => (React.createElement(Wrapper$2, null,
    React.createElement(FormError, { error: error },
        React.createElement(StyledCheckbox, { label: label, name: name, checked: checked, onChange: onChange }))));

const Wrapper$3 = styled(FormControl) ``;
const MaterialSelect = styled(Select$1) `
  .MuiSelect-select {
    width: calc(100% - 32px) !important;
  }
`;
const Item = styled(MenuItem) `
  .MuiListItem-root {
    width: 100% !important;
  }
`;

const Select = (_a) => {
    var { onChange, error = '', label = '', selectedValue, values } = _a, rest = __rest(_a, ["onChange", "error", "label", "selectedValue", "values"]);
    return (React.createElement(Wrapper$3, Object.assign({ error: error !== '' }, rest),
        React.createElement(InputLabel, null, label),
        React.createElement(MaterialSelect, Object.assign({ value: selectedValue, onChange: (event) => onChange(event.target.value) }, rest), values.map((item) => (React.createElement(Item, Object.assign({ key: item.value, value: item.value }, rest), item.label)))),
        React.createElement(FormHelperText, null, error)));
};

export { Avatar, Button, Checkbox, FormContainer, FormError, Icon, If, LoadingIndicator, Paper, index as ScrollToTop, Select, TextInput, Touchable, Typography };
//# sourceMappingURL=index.esm.js.map
