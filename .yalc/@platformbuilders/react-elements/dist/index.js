'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactRouterDom = require('react-router-dom');
var styled = require('styled-components');
var ButtonBase = require('@material-ui/core/ButtonBase');
var core = require('@material-ui/core');
var helpers = require('@platformbuilders/helpers');
var IconButton = require('@material-ui/core/IconButton');
var MaterialIcon = require('@material-ui/core/Icon');
var MaterialAvatar = require('@material-ui/core/Avatar');
var Animation = require('react-lottie');
var TextInputMask = require('react-input-mask');
var MaskedInput = require('react-text-mask');
var createNumberMask = require('text-mask-addons/dist/createNumberMask');
var formik = require('formik');
var FormHelperText = require('@material-ui/core/FormHelperText');
var InputLabel = require('@material-ui/core/InputLabel');
var MenuItem = require('@material-ui/core/MenuItem');
var FormControl = require('@material-ui/core/FormControl');
var Select$1 = require('@material-ui/core/Select');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var ButtonBase__default = /*#__PURE__*/_interopDefaultLegacy(ButtonBase);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);
var MaterialIcon__default = /*#__PURE__*/_interopDefaultLegacy(MaterialIcon);
var MaterialAvatar__default = /*#__PURE__*/_interopDefaultLegacy(MaterialAvatar);
var Animation__default = /*#__PURE__*/_interopDefaultLegacy(Animation);
var TextInputMask__default = /*#__PURE__*/_interopDefaultLegacy(TextInputMask);
var MaskedInput__default = /*#__PURE__*/_interopDefaultLegacy(MaskedInput);
var createNumberMask__default = /*#__PURE__*/_interopDefaultLegacy(createNumberMask);
var FormHelperText__default = /*#__PURE__*/_interopDefaultLegacy(FormHelperText);
var InputLabel__default = /*#__PURE__*/_interopDefaultLegacy(InputLabel);
var MenuItem__default = /*#__PURE__*/_interopDefaultLegacy(MenuItem);
var FormControl__default = /*#__PURE__*/_interopDefaultLegacy(FormControl);
var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select$1);

class ScrollToTop extends React.Component {
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
var index = reactRouterDom.withRouter(ScrollToTop);

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

const CustomTouchable = styled__default['default'](ButtonBase__default['default']) ``;

const Touchable = (_a) => {
    var { children, onPress } = _a, rest = __rest(_a, ["children", "onPress"]);
    return (React__default['default'].createElement(CustomTouchable, Object.assign({ onClick: onPress }, rest), children));
};

const ObjectType = {
    STRING: '[object String]',
};
const getType = (value) => {
    return Object.prototype.toString.call(value);
};
const isString = (value) => getType(value) === ObjectType.STRING;

const Wrapper = styled__default['default'](core.Paper) `
  padding: ${helpers.getTheme('largeSpacing')}px;
`;

const Paper = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Wrapper, Object.assign({}, rest), children));
};

const Icon = (_a) => {
    var { name, color = 'inherit', size = 'default' } = _a, rest = __rest(_a, ["name", "color", "size"]);
    return (React__default['default'].createElement(IconButton__default['default'], Object.assign({ color: "inherit", edge: "start" }, rest),
        React__default['default'].createElement(MaterialIcon__default['default'], { color: color, fontSize: size }, name)));
};

const DefaultAvatar = styled__default['default']((_a) => {
    var { onPress } = _a, rest = __rest(_a, ["onPress"]);
    return (React__default['default'].createElement(Touchable, { onPress: onPress },
        React__default['default'].createElement(MaterialAvatar__default['default'], Object.assign({}, rest))));
}) ``;

const Avatar = (_a) => {
    var { src, alt = '', variant = 'circle', onPress } = _a, rest = __rest(_a, ["src", "alt", "variant", "onPress"]);
    return (React__default['default'].createElement(DefaultAvatar, Object.assign({ alt: alt, src: src, variant: variant, onPress: onPress }, rest)));
};

const CustomTypography = styled__default['default'](core.Typography) ``;

const Typography = (_a) => {
    var { variant, children } = _a, rest = __rest(_a, ["variant", "children"]);
    return (React__default['default'].createElement(CustomTypography, Object.assign({ variant: variant }, rest), children));
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
const LoadingIndicator = ({ size = 'medium' }) => (React__default['default'].createElement(Animation__default['default'], { options: defaultOptions, isStopped: false, isPaused: false, height: Sizes[size], width: Sizes[size] }));

const primaryMain = helpers.getTheme('primary.main');
const primaryContrast = helpers.getTheme('primary.contrast');
const secondaryMain = helpers.getTheme('secondary.main');
const secondaryContrast = helpers.getTheme('secondary.contrast');
const StyledButton = styled__default['default']((props) => (React__default['default'].createElement(core.Button, Object.assign({}, props, { secondary: undefined })))) `
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
const LoadingIndicator$1 = styled__default['default']((props) => (React__default['default'].createElement(core.CircularProgress, Object.assign({}, props, { secondary: undefined, size: 20 })))) `
  color: ${(props) => props.secondary ? secondaryContrast(props) : primaryContrast(props)};
`;

const Button = (_a) => {
    var { children, type, onPress, loading = false, disabled = false, secondary = false } = _a, rest = __rest(_a, ["children", "type", "onPress", "loading", "disabled", "secondary"]);
    return (React__default['default'].createElement(StyledButton, Object.assign({ onClick: onPress, disabled: disabled, secondary: secondary || undefined, type: type || undefined }, rest),
        React__default['default'].createElement(If, { condition: !!loading },
            React__default['default'].createElement(LoadingIndicator$1, { secondary: secondary || undefined })),
        React__default['default'].createElement(If, { condition: !loading }, children)));
};

const textColor = helpers.getTheme('text');
const primaryMain$1 = helpers.getTheme('primary.main');
const smallSpacing = helpers.getTheme('smallSpacing');
const failureColor = helpers.getTheme('failure');
const hasError = helpers.ifStyle('selected');
const Wrapper$1 = styled__default['default'].div `
  position: relative;
`;
const Input = styled__default['default'].input `
  font-size: ${helpers.pxToRem(16)};
  padding: ${smallSpacing} 0;
  display: block;
  width: ${helpers.pxToRem(300)};
  border: none;
  border-bottom: ${helpers.pxToRem(1)} solid ${textColor}80;
  color: ${hasError(failureColor, textColor)};

  :focus {
    outline: none;
  }

  :focus ~ label {
    top: ${helpers.pxToRem(-20)};
    font-size: ${helpers.pxToRem(14)};
    color: ${primaryMain$1};
  }

  :valid ~ label {
    top: ${helpers.pxToRem(-20)};
    font-size: ${helpers.pxToRem(14)};
  }

  :focus ~ .bar:before,
  :focus ~ .bar:after {
    width: 50%;
  }
`;
const Bar = styled__default['default'].span `
  position: absolute;
  bottom: ${helpers.pxToRem(-1)};
  display: block;
  width: 100%;

  :before,
  :after {
    content: '';
    height: ${helpers.pxToRem(2)};
    width: 0;
    bottom: ${helpers.pxToRem(1)};
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
const Label = styled__default['default'].label `
  color: ${hasError(failureColor, textColor)};
  font-size: ${helpers.pxToRem(18)};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  top: ${helpers.pxToRem(10)};
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
    const currencyMask = createNumberMask__default['default'](defaultMaskOptions);
    const handleChange = (event) => {
        if (onChangeText && event.target.value) {
            onChangeText(Object.assign(Object.assign({}, event), { target: Object.assign(Object.assign({}, event.target), { value: helpers.toOnlyNumbers(event.target.value) }) }));
        }
    };
    return (React__default['default'].createElement(FormError, { error: error },
        React__default['default'].createElement(Wrapper$1, null,
            React__default['default'].createElement(MaskedInput__default['default'], { mask: currencyMask, placeholder: "R$ 0,00", id: id, name: name, value: value, onChange: handleChange, render: (ref, props) => React__default['default'].createElement(Input, Object.assign({ ref: ref, error: error }, props)) }),
            React__default['default'].createElement(Bar, { className: "bar", error: error }),
            React__default['default'].createElement(Label, { error: error }, label))));
};

const primaryMain$2 = helpers.getTheme('primary.main');
const Input$1 = styled__default['default'](core.TextField) `
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
const InputWrapper = styled__default['default'].div `
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
        return maskType === 'currency' ? (React__default['default'].createElement(CurrencyInputComponent, Object.assign({}, rest, { onChangeText: onChange }))) : hasMask ? (React__default['default'].createElement(TextInputMask__default['default'], Object.assign({ mask: maskOption, onChange: onChange }, rest), (inputProps) => (React__default['default'].createElement(Input$1, Object.assign({ margin: "normal" }, inputProps, { inputProps: { maxLength: maxlength } }))))) : (React__default['default'].createElement(Input$1, Object.assign({}, rest, { margin: "normal", onChange: onChange, error: !!error, inputProps: { maxLength: maxlength } })));
    };
    return (React__default['default'].createElement(InputWrapper, Object.assign({}, rest),
        React__default['default'].createElement(FormError, { error: error }, renderTextInput())));
};

const ErrorText = styled__default['default'](Typography).attrs({ variant: 'caption' }) `
  color: ${helpers.getTheme('failure')};
`;

const FormError = (_a) => {
    var { children, error } = _a, rest = __rest(_a, ["children", "error"]);
    const isErrorValid = isString(error);
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        children,
        isErrorValid && React__default['default'].createElement(ErrorText, Object.assign({}, rest), error)));
};

const FormContainer = (_a) => {
    var { validateOnChange, validationSchema, initialValues, onSubmit, children } = _a, rest = __rest(_a, ["validateOnChange", "validationSchema", "initialValues", "onSubmit", "children"]);
    return (React__default['default'].createElement(formik.Formik, Object.assign({ validateOnChange: validateOnChange, validationSchema: validationSchema, initialValues: initialValues, onSubmit: onSubmit }, rest), children));
};

const primaryMain$3 = helpers.getTheme('primary.main');
const Wrapper$2 = styled__default['default'].div `
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;
const ColoredCheckbox = styled__default['default']((props) => (React__default['default'].createElement(core.Checkbox, Object.assign({ color: "default", checked: props.checked, onChange: props.onChange }, props)))) `
  color: ${primaryMain$3};
  & .Mui-checked {
    color: green;
  }
`;
const StyledCheckbox = styled__default['default']((props) => (React__default['default'].createElement(core.FormControlLabel, { control: React__default['default'].createElement(ColoredCheckbox, { checked: props.checked, onChange: props.onChange }), label: props.label }))) ``;

const Checkbox = ({ checked, onChange, label, name, error, }) => (React__default['default'].createElement(Wrapper$2, null,
    React__default['default'].createElement(FormError, { error: error },
        React__default['default'].createElement(StyledCheckbox, { label: label, name: name, checked: checked, onChange: onChange }))));

const Wrapper$3 = styled__default['default'](FormControl__default['default']) ``;
const MaterialSelect = styled__default['default'](Select__default['default']) `
  .MuiSelect-select {
    width: calc(100% - 32px) !important;
  }
`;
const Item = styled__default['default'](MenuItem__default['default']) `
  .MuiListItem-root {
    width: 100% !important;
  }
`;

const Select = (_a) => {
    var { onChange, error = '', label = '', selectedValue, values } = _a, rest = __rest(_a, ["onChange", "error", "label", "selectedValue", "values"]);
    return (React__default['default'].createElement(Wrapper$3, Object.assign({ error: error !== '' }, rest),
        React__default['default'].createElement(InputLabel__default['default'], null, label),
        React__default['default'].createElement(MaterialSelect, Object.assign({ value: selectedValue, onChange: (event) => onChange(event.target.value) }, rest), values.map((item) => (React__default['default'].createElement(Item, Object.assign({ key: item.value, value: item.value }, rest), item.label)))),
        React__default['default'].createElement(FormHelperText__default['default'], null, error)));
};

exports.Avatar = Avatar;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.FormContainer = FormContainer;
exports.FormError = FormError;
exports.Icon = Icon;
exports.If = If;
exports.LoadingIndicator = LoadingIndicator;
exports.Paper = Paper;
exports.ScrollToTop = index;
exports.Select = Select;
exports.TextInput = TextInput;
exports.Touchable = Touchable;
exports.Typography = Typography;
//# sourceMappingURL=index.js.map
