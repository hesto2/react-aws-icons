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
    }), _react.default.createElement("title", null, "Queue"), _react.default.createElement("g", null, _react.default.createElement("rect", {
      x: "17.16",
      y: "28.68",
      width: "65.68",
      height: "42.64",
      fill: "#876929"
    }), _react.default.createElement("path", {
      d: "M17.16,28.68H82.84V68.41H17.16Z",
      fill: "#d9a741"
    }), _react.default.createElement("rect", {
      x: "35.39",
      y: "34.03",
      width: "7",
      height: "29.96",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "46.5",
      y: "34.03",
      width: "7",
      height: "29.96",
      fill: "#fff"
    }), _react.default.createElement("rect", {
      x: "57.61",
      y: "34.03",
      width: "7",
      height: "29.96",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "25.27 42.51 25.27 55.51 31.27 49.01 25.27 42.51",
      fill: "#fff"
    }), _react.default.createElement("polygon", {
      points: "68.73 42.51 68.73 55.51 74.73 49.01 68.73 42.51",
      fill: "#fff"
    }))) // -- END of generated content.

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