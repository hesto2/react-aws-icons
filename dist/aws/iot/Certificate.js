"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var AWSIcon = function AWSIcon(props) {
  var size = props.size,
      otherProps = _objectWithoutProperties(props, ["size"]);

  return (// -- START of generated SVG source.
    _react.default.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      size: size
    }, otherProps, {
      height: size,
      viewBox: "0 0 100 100"
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Certificate"), _react.default.createElement("path", {
      style: {
        "fill": "none"
      },
      d: "M37.12,38.7h0a2.47,2.47,0,0,0,0,4.93h0a2.47,2.47,0,1,0,0-4.93Z"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "64.98 71.99 58.5 68.74 55.16 75.18 50 70.09 44.84 75.18 41.5 68.74 35.02 71.99 33.83 64.84 31.29 65.22 31.29 88.65 50 75.77 68.72 88.65 68.72 65.22 66.17 64.84 64.98 71.99"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "31.29 54.48 31.29 85.65 50 72.77 68.72 85.65 68.72 54.48 31.29 54.48"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#19486f"
      },
      points: "73.82 42.59 78.23 38.12 78.23 35.12 72.66 35.23 75.47 29.61 75.47 26.61 69.27 28.59 70.21 22.37 70.21 19.37 64 23.32 62.98 17.12 57.36 19.93 54.47 14.35 50 18.77 45.53 14.35 42.64 19.93 37.02 17.12 36 23.32 29.79 19.37 29.79 22.37 30.73 28.59 24.53 26.61 24.53 29.61 27.34 35.23 21.77 35.12 21.77 38.12 26.18 42.59 21.77 44.06 21.77 47.06 27.34 49.95 24.53 52.56 24.53 55.56 30.73 56.59 29.79 59.8 29.79 62.8 31.29 62.57 36 61.86 37.02 68.06 42.64 65.24 45.53 70.82 50 66.41 54.47 70.82 57.36 65.24 62.98 68.06 64 61.86 68.72 62.57 70.21 62.8 70.21 59.8 69.27 56.59 75.47 55.56 75.47 52.56 72.66 49.95 78.23 47.06 78.23 44.06 73.82 42.59"
    }), _react.default.createElement("polygon", {
      style: {
        "fill": "#2e73b8"
      },
      points: "73.82 39.59 78.23 35.12 72.66 32.23 75.47 26.61 69.27 25.59 70.21 19.37 64 20.32 62.98 14.12 57.36 16.93 54.47 11.35 50 15.77 45.53 11.35 42.64 16.93 37.02 14.12 36 20.32 29.79 19.37 30.73 25.59 24.53 26.61 27.34 32.23 21.77 35.12 26.18 39.59 21.77 44.06 27.34 46.95 24.53 52.56 30.73 53.59 29.79 59.8 31.29 59.57 36 58.86 37.02 65.06 42.64 62.24 45.53 67.82 50 63.41 54.47 67.82 57.36 62.24 62.98 65.06 64 58.86 68.72 59.57 70.21 59.8 69.27 53.59 75.47 52.56 72.66 46.95 78.23 44.06 73.82 39.59"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#2e73b8"
      },
      cx: "50",
      cy: "39.59",
      r: "21.83"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M50,62.92A23.33,23.33,0,1,1,73.33,39.59,23.36,23.36,0,0,1,50,62.92Zm0-43.66A20.33,20.33,0,1,0,70.33,39.59,20.35,20.35,0,0,0,50,19.26Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M64.8,37.77l-3.09,1.85-1.19-.26L59.22,38l-3.38.32L54.43,35.9l-4,.05-.91,0a8.39,8.39,0,0,0-2-2.21,8.76,8.76,0,0,0-11,.05A8.58,8.58,0,0,0,36,46.66a8.75,8.75,0,0,0,11.56.48A7,7,0,0,0,48.76,46a6.66,6.66,0,0,0,.9-1.33,7.76,7.76,0,0,0,.5-1H66.31L68,40.71ZM38.24,42.58h0a2.27,2.27,0,0,1,0-4.54h0a2.27,2.27,0,1,1,0,4.54Z"
    })) // -- END of generated content.

  );
};

AWSIcon.propTypes = {
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
AWSIcon.defaultProps = {
  size: 24
};
var _default = AWSIcon;
exports.default = _default;