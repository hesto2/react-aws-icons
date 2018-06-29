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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Role"), _react.default.createElement("path", {
      style: {
        "fill": "#4b612c"
      },
      d: "M89.17,51.89a7,7,0,0,1-.83-1.25,27.92,27.92,0,0,1-2.66-8.05,33.72,33.72,0,0,0-16-22.28c-6-3.69-12.09-6.09-19.31-5.16-9.55,1.23-17.64,4.79-23.2,13.06a65.9,65.9,0,0,0-7.36,15c-1.71,4.82-1.5,10.1-3.67,14.79a21.24,21.24,0,0,1-1.59,2.69c-1.5,2.29-3.41,4.41-4.48,6.88-2.64,6.07-1.19,9.58,4.69,12.6.6.31,1.22.59,1.85.84,6.86,2.78,22.88,6.22,32.82,2.39a34,34,0,0,0,6.66-2.85C64,76.3,71.9,72,79.76,67.72a33.12,33.12,0,0,0,9.52-7.22C91.83,57.55,91.76,54.8,89.17,51.89Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#759c3e"
      },
      d: "M61.25,18.56a35,35,0,0,1,11.5,6.76c2.53,2,9.26,8.93,10.81,17.63.16,1.29.26,2.6.51,3.87a5.85,5.85,0,0,0,.85,1.54l.81,2s1.48,2.35,2.29,3.49c1,1.42,1.4,2.88.27,4.36-2.51,3.27-5.82,5.54-9.88,7.65l.41-4.27-2.66-.76c-1,2.28-.39,4,2.13,5.24-2.38,1.26-4.46,2.35-6.53,3.45-6.36,3.4-12.67,6.89-19.08,10.2a30.53,30.53,0,0,1-15.14,3.49,58.78,58.78,0,0,1-17.8-3.43c-2.6-.93-4.67-5-3.87-7.57a2.58,2.58,0,0,1,2.93-1.81c4.46.47,8.91,1,13.36,1.54,4.95.6,9.89,1.67,14.84,1.71,5.61,0,11-1.71,16.24-3.89-1.59.11-3.18.2-4.77.32-4.42.33-8.87.47-13.26,1.05-5.45.72-10.61-.47-15.79-1.76a16.51,16.51,0,0,1-10.09-6.87c-.93-1.39-1.5-3-.78-4.5.58.52,1.22,1.49,1.72,1.43s1.36-.94,1.63-1.63c.68-1.77,1.14-3.63,1.66-5.46a98.49,98.49,0,0,1,2.81-9.83c2.32-5.8,4.77-11.59,8.64-16.58a34.67,34.67,0,0,1,4.77-5.21c2.32-2,5.33-2.68,8.27-3,3.49-.33,7-.16,10.56-.19.2,0,.4.17.6.27Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#b7ca9d"
      },
      d: "M83.56,42.95a40.93,40.93,0,0,0-2.33-4.43,11.39,11.39,0,0,0-18.69.06c-2.92,4.09-4.28,8.76-5.06,13.64-.24,1.46-.41,2.94-.67,4.81a16.81,16.81,0,0,1-2.27-8.3c-.28-5.89.56-11.58,4.24-16.49,2.63-3.51,5.74-6.37,10.29-7a20.29,20.29,0,0,1,3.67.12c1.39,1.2,3.05,2.2,4.13,3.63a35.73,35.73,0,0,1,6.4,12A15.08,15.08,0,0,1,83.56,42.95Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#b7ca9d"
      },
      d: "M61.25,18.56c-5.07,1.41-8,5.16-10.42,9.48-3.46,6.23-6,12.77-5.86,20a30.1,30.1,0,0,0,2.57,12c.18.4.31.82.56,1.48a5,5,0,0,1-4.5-2.31A14.76,14.76,0,0,1,41,50.09c.21-9.33,2-18.26,8.1-25.77a39.76,39.76,0,0,1,4.37-4.47,7.84,7.84,0,0,1,5.76-2Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#b7ca9d"
      },
      d: "M85.73,50.38c0,2.3-1.59,3.51-3.13,4.74-7.72,6.17-16.71,9.44-26.3,11.21-4.25.79-8.53,1.48-12.82,2-5.23.63-10.12-1.19-15.06-2.48-2-.53-4-1.18-6.07-1.77,0-.22,0-.43.07-.65a16.21,16.21,0,0,1,2.7,0c4,.69,7.93,1.72,11.94,2.11a52.89,52.89,0,0,0,11.08,0A80.61,80.61,0,0,0,68.3,60.82,86.55,86.55,0,0,0,79.22,55.5c2.78-1.56,5.35-3.53,5.7-7.15Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#b7ca9d"
      },
      d: "M76.15,60.84c1.92-1.15,3.79-2.39,5.77-3.41a8.13,8.13,0,0,1,2.67-.36l.19.47-6,4.06Z"
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