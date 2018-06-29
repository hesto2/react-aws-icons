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
    }), _react.default.createElement("title", null, "Pinpoint"), _react.default.createElement("g", null, _react.default.createElement("polygon", {
      points: "79.64 52.69 55.8 51.9 16 52.48 16 64.5 28.56 80.4 44.58 88.41 44.58 80.74 50 78.83 50 86.02 55.42 88.41 79.64 52.69",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "79.64 47.31 56.32 48.09 16 47.52 16 35.5 28.56 19.6 44.58 11.59 44.58 19.26 50 21.17 50 13.98 55.42 11.59 79.64 47.31",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "44.58 68.17 50 55.84 84 52.48 84 64.5 71.44 80.4 55.42 88.41 55.42 80.74 50 78.83 50 86.02 44.58 88.41 44.58 68.17",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "44.58 32.15 50 45.16 84 47.52 84 35.5 71.44 19.6 55.42 11.59 55.42 19.26 50 21.17 50 13.98 44.58 11.59 44.58 32.15",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "39.08 52.34 79.57 59.91 84 52.48 56.77 51.88 39.08 52.34",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "81.82 61.09 57.88 59.69 56.32 73.73 65.27 79.64 78.32 70.65 81.82 61.09",
      fill: "#875078"
    }), _react.default.createElement("polygon", {
      points: "59.25 52.19 79.64 52.69 79.64 62.54 59.25 60.23 59.25 52.19",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "18.18 60.27 43.43 59.14 47.7 72.99 33.01 79.23 23.08 70.65 18.18 60.27",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "59.89 51.99 49.02 51.75 16 52.48 20.36 59.7 59.89 51.99",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "40.11 52.2 20.36 52.69 20.36 62.54 40.11 60.31 40.11 52.2",
      fill: "#875078"
    }), _react.default.createElement("polygon", {
      points: "39.08 47.67 79.64 37.47 84 47.53 56.77 48.13 39.08 47.67",
      fill: "#512843"
    }), _react.default.createElement("polygon", {
      points: "81.82 38.92 57.88 40.31 56.32 26.28 65.27 20.37 78.32 29.36 81.82 38.92",
      fill: "#875078"
    }), _react.default.createElement("polygon", {
      points: "59.25 47.82 79.64 47.31 79.64 37.47 59.25 39.77 59.25 47.82",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "18.18 39.74 43.43 40.86 47.7 27.02 33.01 20.78 23.08 29.36 18.18 39.74",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "59.89 48.01 49.02 48.26 16 47.53 20.22 38.02 59.89 48.01",
      fill: "#512843"
    }), _react.default.createElement("polygon", {
      points: "40.11 47.8 20.36 47.31 20.36 37.47 40.11 39.7 40.11 47.8",
      fill: "#875078"
    }), _react.default.createElement("polygon", {
      points: "62.78 74.33 50 71.04 31.94 75.69 44.54 80.76 62.78 74.33",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "68.02 75.68 50 71.04 37.22 74.33 55.42 80.74 68.02 75.68",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "62.82 25.65 50 28.93 31.94 24.31 44.58 19.26 62.82 25.65",
      fill: "#512843"
    }), _react.default.createElement("polygon", {
      points: "68.06 24.31 50 28.93 37.18 25.65 55.42 19.26 68.06 24.31",
      fill: "#512843"
    }), _react.default.createElement("polygon", {
      points: "36.21 47.31 68.06 41.1 74.42 47.02 50 47.69 36.21 47.31",
      fill: "#512843"
    }), _react.default.createElement("polygon", {
      points: "66.07 47.25 50 47.69 25.58 47.02 34.27 36.01 66.07 47.25",
      fill: "#512843"
    }), _react.default.createElement("polygon", {
      points: "30.41 41.86 50 43.19 50 34.75 36.7 30.66 30.41 41.86",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "61.37 30.14 50 34.75 50 42.69 68.57 41.06 61.37 30.14",
      fill: "#875078"
    }), _react.default.createElement("polygon", {
      points: "35.23 69.3 50 65.23 50 56.65 27.59 57.93 35.23 69.3",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "68.79 57.48 50 56.65 50 65.23 58.91 68.72 68.39 67.16 68.79 57.48",
      fill: "#875078"
    }), _react.default.createElement("polygon", {
      points: "51.48 42.56 68.06 41.1 68.06 46.7 51.48 47.23 51.48 42.56",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "47.7 42.52 31.94 41.13 31.94 46.7 47.7 47.21 47.7 42.52",
      fill: "#875078"
    }), _react.default.createElement("polygon", {
      points: "51.06 52.7 68.13 58.52 74.42 52.98 57.28 52.49 51.06 52.7",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "51.48 52.74 68.06 53.3 68.06 58.92 51.48 57.62 51.48 52.74",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "42.97 52.93 36.46 52.67 25.58 52.98 31.94 58.92 42.97 52.93",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "47.7 52.77 31.94 53.3 31.94 58.92 47.7 57.5 47.7 52.77",
      fill: "#875078"
    }), _react.default.createElement("polygon", {
      points: "50 58.13 39.88 57.12 39.88 42.73 50 41.71 50 58.13",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "28.56 19.6 44.58 11.59 44.58 19.26 28.56 25.67 28.56 19.6",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "35.63 27.45 44.58 24.48 44.58 32.15 35.63 34.22 35.63 27.45",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "25.58 38.39 31.94 37.12 31.94 46.7 25.58 47.02 25.58 38.39",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "16 35.5 20.36 34.19 20.36 47.31 16 47.52 16 35.5",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "31.94 24.31 19.88 38.02 16 35.5 28.56 19.6 31.94 24.31",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "40.74 33.04 31.21 41.75 25.55 38.4 35.63 27.45 40.74 33.04",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "71.44 19.6 55.42 11.59 55.42 19.26 71.44 25.67 71.44 19.6",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "64.36 27.45 55.42 24.48 55.42 32.15 64.36 34.22 64.36 27.45",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "74.42 38.39 68.06 37.12 68.06 46.7 74.42 47.02 74.42 38.39",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "84 35.5 79.64 34.19 79.64 47.31 84 47.52 84 35.5",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "68.06 24.31 80.13 38.02 84 35.5 71.44 19.6 68.06 24.31",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "59.26 33.04 68.79 41.75 74.45 38.4 64.36 27.45 59.26 33.04",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "28.56 80.4 44.58 88.41 44.58 80.74 28.56 74.33 28.56 80.4",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "35.63 72.55 44.58 75.52 44.58 67.85 35.63 65.78 35.63 72.55",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "25.58 61.61 31.94 62.88 31.94 53.3 25.58 52.98 25.58 61.61",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "16 64.5 20.36 65.81 20.36 52.69 16 52.48 16 64.5",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "31.94 75.69 19.88 61.98 16 64.5 28.56 80.4 31.94 75.69",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "40.74 66.96 31.21 58.25 25.55 61.6 35.63 72.55 40.74 66.96",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "71.44 80.4 55.42 88.41 55.42 80.74 71.44 74.33 71.44 80.4",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "64.36 72.55 55.42 75.52 55.42 67.85 64.36 65.78 64.36 72.55",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "74.42 61.61 68.06 62.88 68.06 53.3 74.42 52.98 74.42 61.61",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "84 64.5 79.64 65.81 79.64 52.69 84 52.48 84 64.5",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "68.06 75.69 80.13 61.98 84 64.5 71.44 80.4 68.06 75.69",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "59.26 66.96 68.79 58.25 74.45 61.6 64.36 72.55 59.26 66.96",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "60.17 57.11 50 58.13 50 41.71 60.17 42.73 60.17 57.11",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "50 33.25 55.42 32.15 55.42 24.48 50 26.06 50 33.25",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "50 73.93 55.42 75.52 55.42 67.85 50 66.74 50 73.93",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "50 86.02 55.42 88.41 55.42 80.74 50 78.83 50 86.02",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "50 21.16 55.42 19.26 55.42 11.59 50 13.97 50 21.16",
      fill: "#692f56"
    }), _react.default.createElement("polygon", {
      points: "44.58 32.15 50 33.25 50 26.06 44.58 24.48 44.58 32.15",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "44.58 75.52 50 73.93 50 66.74 44.58 67.85 44.58 75.52",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "44.58 88.41 50 86.02 50 78.83 44.58 80.74 44.58 88.41",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "44.58 19.34 50 21.23 50 13.97 44.58 11.59 44.58 19.34",
      fill: "#ad688b"
    }), _react.default.createElement("polygon", {
      points: "53.85 65.95 50 65.23 40.74 66.96 44.56 67.86 53.85 65.95",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "59.25 66.96 50 65.23 46.15 65.95 55.42 67.85 59.25 66.96",
      fill: "#cfb2c1"
    }), _react.default.createElement("polygon", {
      points: "53.87 34.03 50 34.75 40.74 33.04 44.58 32.15 53.87 34.03",
      fill: "#512843"
    }), _react.default.createElement("polygon", {
      points: "59.26 33.04 50 34.75 46.13 34.03 55.42 32.15 59.26 33.04",
      fill: "#512843"
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