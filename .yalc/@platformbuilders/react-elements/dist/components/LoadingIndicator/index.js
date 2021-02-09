import React from 'react';
import Animation from 'react-lottie';
import loading from '../../assets/animations/loading.json';
export var Sizes;
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
export default LoadingIndicator;
//# sourceMappingURL=index.js.map