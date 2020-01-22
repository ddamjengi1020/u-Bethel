"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChangePassword = exports.getEditProfile = exports.getUserDetail = exports.getUser = void 0;

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getUser = function getUser(req, res) {
  res.render("user", {
    pageTitle: "User"
  });
};

exports.getUser = getUser;

var getUserDetail = function getUserDetail(req, res) {
  res.render("userDetail", {
    pageTitle: "Detail"
  });
};

exports.getUserDetail = getUserDetail;

var getEditProfile = function getEditProfile(req, res) {
  res.render("editProfile", {
    pageTitle: "Edit-profile"
  });
};

exports.getEditProfile = getEditProfile;

var getChangePassword = function getChangePassword(req, res) {
  res.render("changePassword", {
    pageTitle: "change-password"
  });
};

exports.getChangePassword = getChangePassword;