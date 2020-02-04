"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _globalController = require("../controllers/globalController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalRouter = _express["default"].Router();

globalRouter.get(_routes["default"].home, _globalController.home); //  Logged

globalRouter.get(_routes["default"].join, _globalController.getJoin);
globalRouter.get(_routes["default"].login, _globalController.getLogin);
globalRouter.get(_routes["default"].logout, _globalController.logout); //  Nav

globalRouter.get(_routes["default"].about, _globalController.about);
globalRouter.get(_routes["default"].worship, _globalController.worship);
globalRouter.get(_routes["default"].life, _globalController.life);
globalRouter.get(_routes["default"].school, _globalController.school);
globalRouter.get(_routes["default"].community, _globalController.community);
globalRouter.get(_routes["default"].story, _globalController.story);
var _default = globalRouter;
exports["default"] = _default;