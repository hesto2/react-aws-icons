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
    }), _react.default.createElement("title", null, "STS"), _react.default.createElement("g", null, _react.default.createElement("circle", {
      cx: "34.1",
      cy: "51.24",
      r: "2.81",
      fill: "#4b612c"
    }), _react.default.createElement("rect", {
      x: "31.29",
      y: "48.76",
      width: "5.62",
      height: "2.48",
      fill: "#4b612c"
    }), _react.default.createElement("path", {
      d: "M23,37.48v28H77v-28ZM69.33,55.81H48.55a10.76,10.76,0,1,1,0-9.15h6.36l1.13,2,4.21-.39,1.62,1.66,1.48.32,3.84-2.3L72,51.58Z",
      fill: "#4b612c"
    }), _react.default.createElement("circle", {
      cx: "34.1",
      cy: "48.76",
      r: "2.81",
      fill: "#759c3e"
    }), _react.default.createElement("path", {
      d: "M23,35V63H77V35ZM69.33,53.33H48.55a10.76,10.76,0,1,1,0-9.15h6.36l1.13,2,4.21-.39,1.62,1.66,1.48.32,3.84-2.3L72,49.1Z",
      fill: "#759c3e"
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