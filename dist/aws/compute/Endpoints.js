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
    }), _react.default.createElement("defs", null), _react.default.createElement("title", null, "Endpoints"), _react.default.createElement("circle", {
      style: {
        "fill": "#9d5025"
      },
      cx: "50",
      cy: "51.25",
      r: "30.43"
    }), _react.default.createElement("circle", {
      style: {
        "fill": "#f58536"
      },
      cx: "50",
      cy: "48.75",
      r: "30.43"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M50,71.36l-.48-.17a24.08,24.08,0,0,1-9.27-6.87A33.81,33.81,0,0,1,34,53.58a51.14,51.14,0,0,1-2.79-17.46V34.68l1.44,0c1.3,0,3.72-.43,4.68-1.39A7.32,7.32,0,0,0,39,29.32l.07-.93.87-.33A32,32,0,0,1,50,26.14a33.81,33.81,0,0,1,10.06,1.91l.89.33.07.94a7.23,7.23,0,0,0,1.63,3.93c.9.9,3.55,1.28,4.69,1.33l1.41.06v1.41A51.37,51.37,0,0,1,66,53.55a33.88,33.88,0,0,1-6.21,10.76,24.05,24.05,0,0,1-9.27,6.88ZM34.21,37.48c.22,10.28,3,18.83,8.14,24.78a22.9,22.9,0,0,0,7.65,6,22.87,22.87,0,0,0,7.65-6c5.12-6,7.92-14.54,8.14-24.86-1.54-.21-3.9-.74-5.22-2.05a9.47,9.47,0,0,1-2.33-4.79A29.88,29.88,0,0,0,50,29.08a28.52,28.52,0,0,0-8.23,1.45,9.47,9.47,0,0,1-2.31,4.82A9.38,9.38,0,0,1,34.21,37.48Z"
    }), _react.default.createElement("path", {
      style: {
        "fill": "#fff"
      },
      d: "M59.07,47.35c-1.8,1.8-7.29,5.63-9.38,7.73v-6H25.46V45.49H49.64V39.58C51.63,41.57,57.12,45.4,59.07,47.35Z"
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