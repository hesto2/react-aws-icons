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
    }), _react.default.createElement("title", null, "SSLPadlock"), _react.default.createElement("path", {
      d: "M50,84.55l-.71-.24c-.28-.1-7-2.47-13.65-10.12a49.81,49.81,0,0,1-9.15-15.82,75.32,75.32,0,0,1-4.11-25.71V30.52l2.12,0c1.91,0,5.47-.63,6.89-2.05,2-2,2.36-5.77,2.36-5.81l.1-1.37,1.28-.49A47.19,47.19,0,0,1,50,17.93a49.81,49.81,0,0,1,14.82,2.82l1.31.48.1,1.39s.32,3.72,2.4,5.8c1.32,1.32,5.22,1.89,6.9,2l2.08.08v2.08a75.67,75.67,0,0,1-4.11,25.78,49.91,49.91,0,0,1-9.15,15.86C57.69,81.83,51,84.21,50.71,84.3Z",
      fill: "#7d7c7c"
    }), _react.default.createElement("path", {
      d: "M50,82.07l-.71-.24c-.28-.1-7-2.47-13.65-10.12a49.81,49.81,0,0,1-9.15-15.82,75.32,75.32,0,0,1-4.11-25.71V28l2.12,0c1.91,0,5.47-.63,6.89-2.05,2-2,2.36-5.77,2.36-5.81l.1-1.37,1.28-.49A47.19,47.19,0,0,1,50,15.45a49.81,49.81,0,0,1,14.82,2.82l1.31.48.1,1.39s.32,3.72,2.4,5.8c1.32,1.32,5.22,1.89,6.9,2l2.08.08v2.08a75.67,75.67,0,0,1-4.11,25.78,49.91,49.91,0,0,1-9.15,15.86c-6.66,7.66-13.37,10-13.65,10.14Z",
      fill: "#d2d3d3"
    }), _react.default.createElement("path", {
      d: "M50,76.57l-.82-.37a32.14,32.14,0,0,1-10.77-8.37c-7-8.17-10.9-19.89-11.2-33.89l0-1.8,1.78-.23c2.6-.34,4.64-1.13,5.75-2.24a10.56,10.56,0,0,0,2.5-5.3l.22-1.16,1.12-.37a39.23,39.23,0,0,1,11.46-2,41,41,0,0,1,11.45,2l1.13.36.23,1.17a10.56,10.56,0,0,0,2.52,5.28c1,1,3.09,1.78,5.73,2.14l1.77.24,0,1.79c-.3,14-4.18,25.8-11.21,34a32.11,32.11,0,0,1-10.77,8.39Zm-18.74-41c.55,12.29,4.05,22.52,10.18,29.65A29,29,0,0,0,50,72.16a29,29,0,0,0,8.56-6.95c6.14-7.15,9.64-17.42,10.19-29.76a12.63,12.63,0,0,1-6.24-3,13.59,13.59,0,0,1-3.35-6.15A35.75,35.75,0,0,0,50,24.84a34.48,34.48,0,0,0-9.15,1.48,13.52,13.52,0,0,1-3.33,6.19A12.65,12.65,0,0,1,31.26,35.58Z",
      fill: "#fff"
    }), _react.default.createElement("path", {
      d: "M58.16,43.62V37.48a8.16,8.16,0,0,0-16.2,0v6.14H37.77V57.23H62.23V43.62Zm-4,0H45.86l0-6.14a3.81,3.81,0,0,1,4.17-3.75,4,4,0,0,1,4.17,3.75Z",
      fill: "#7d7c7c"
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