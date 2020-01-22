"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _userController = require("../controllers/userController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router(); //  User Info


userRouter.get(_routes["default"].user, _userController.getUser);
userRouter.get(_routes["default"].userDetail, _userController.getUserDetail);
userRouter.get(_routes["default"].editProfile, _userController.getEditProfile);
userRouter.get(_routes["default"].changePassword, _userController.getChangePassword);
var _default = userRouter;
exports["default"] = _default;