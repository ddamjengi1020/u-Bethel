"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//  Global
var HOME = "/";
var JOIN = "/join";
var LOGIN = "/login";
var LOGOUT = "/logout";
var SEARCH = "/search";
var ABOUT = "/about";
var WORSHIP = "/worship";
var LIFE = "/life";
var SCHOOL = "/school";
var COMMUNITY = "/community";
var STORY = "/story"; //  User

var USER = "/users";
var USER_DETAIL = "/:id";
var EDIT_PROFILE = "/edit-profile";
var CHANGE_PASSWORD = "/change-password"; // Park Pastor

var SENIOR_PASTOR = "/park-pastor";
var routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  about: ABOUT,
  worship: WORSHIP,
  life: LIFE,
  school: SCHOOL,
  community: COMMUNITY,
  story: STORY,
  user: USER,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  seniorPastor: SENIOR_PASTOR
};
var _default = routes;
exports["default"] = _default;