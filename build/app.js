"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _helmet = _interopRequireDefault(require("helmet"));

var _path = _interopRequireDefault(require("path"));

var _routes = _interopRequireDefault(require("./routes"));

var _middlewares = require("./middlewares");

var _globalRouter = _interopRequireDefault(require("./routers/globalRouter"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter"));

var _pastorRouter = _interopRequireDefault(require("./routers/pastorRouter"));

var _searchRouter = _interopRequireDefault(require("./routers/searchRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _helmet["default"])());
app.set("view engine", "pug");
app.set("views", _path["default"].join(__dirname, "views"));
app.use("*/upload", _express["default"]["static"](_path["default"].join(__dirname, "upload")));
app.use("*/icon-img", _express["default"]["static"](_path["default"].join(__dirname, "icon_img")));
app.use("*/font", _express["default"]["static"](_path["default"].join(__dirname, "font")));
app.use("*/static", _express["default"]["static"](_path["default"].join(__dirname, "static")));
app.use((0, _morgan["default"])("dev"));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());
app.use(_middlewares.localsMiddleware);
app.use(_routes["default"].home, _globalRouter["default"]);
app.use(_routes["default"].search, _searchRouter["default"]);
app.use(_routes["default"].user, _userRouter["default"]);
app.use(_routes["default"].seniorPastor, _pastorRouter["default"]);
var _default = app;
exports["default"] = _default;