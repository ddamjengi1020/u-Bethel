"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _pastorController = require("../controllers/pastorController");

var _middlewares = require("../middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pastorRouter = _express["default"].Router();

pastorRouter.get(_routes["default"].home, _pastorController.getPastorHome);
pastorRouter.post(_routes["default"].home, _middlewares.uploadFile, _pastorController.postPastorHome);
var _default = pastorRouter;
exports["default"] = _default;