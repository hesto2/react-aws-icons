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
    }), _react.default.createElement("title", null, "Data Encryption Key"), _react.default.createElement("g", null, _react.default.createElement("path", {
      d: "M67.38,23.33a3,3,0,0,1,3,3v47.4a3,3,0,0,1-3,3H32.62a3,3,0,0,1-3-3V26.29a3,3,0,0,1,3-3H67.38Z",
      fill: "#d2d3d3"
    }), _react.default.createElement("path", {
      d: "M63.25,59.75V53.61a8.16,8.16,0,0,0-16.2,0v6.14H42.85V73.36H67.32V59.75Zm-4,0H51l0-6.14a3.81,3.81,0,0,1,4.17-3.75,4,4,0,0,1,4.17,3.75Z",
      fill: "#373737"
    }), _react.default.createElement("path", {
      d: "M40.71,25.59a8.34,8.34,0,1,0,8.34,8.34A8.34,8.34,0,0,0,40.71,25.59Zm0,6.87a2.18,2.18,0,1,1,2.18-2.18A2.18,2.18,0,0,1,40.71,32.46Z",
      fill: "#7d7c7c"
    }), _react.default.createElement("polygon", {
      points: "44.25 36.75 44.25 46.41 42.73 47.28 43.04 50.54 41.75 51.8 41.5 52.94 43.28 55.92 40.45 59.62 37.16 57.58 37.16 36.75 44.25 36.75",
      fill: "#7d7c7c"
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