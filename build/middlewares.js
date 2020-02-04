"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localsMiddleware = exports.uploadFile = void 0;

var _routes = _interopRequireDefault(require("./routes"));

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var upload = (0, _multer["default"])({
  dest: "upload/"
});
var uploadFile = upload.single("file");
exports.uploadFile = uploadFile;

var localsMiddleware = function localsMiddleware(req, res, next) {
  res.locals.siteName = "u-Bethel";
  res.locals.routes = _routes["default"];
  next();
};

exports.localsMiddleware = localsMiddleware;