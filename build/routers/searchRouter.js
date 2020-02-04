"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _globalController = require("../controllers/globalController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var searchRouter = _express["default"].Router();

searchRouter.get(_routes["default"].home, _globalController.search);
searchRouter.get(_routes["default"].searchWorship, _globalController.search, _globalController.searchWorship);
searchRouter.get(_routes["default"].searchLife, _globalController.searchLife);
searchRouter.get(_routes["default"].searchStory, _globalController.searchStory);
var _default = searchRouter;
exports["default"] = _default;