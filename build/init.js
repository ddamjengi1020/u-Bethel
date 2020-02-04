"use strict";

require("@babel/polyfill");

var _app = _interopRequireDefault(require("./app"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var PORT = process.env.PORT || 5000;

var handleListening = function handleListening() {
  console.log("\uD83D\uDFE2  Listening on : http://localhost:".concat(PORT));
};

_app["default"].listen(PORT, handleListening);