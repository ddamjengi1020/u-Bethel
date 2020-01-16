//  Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
const INFO = "/info";
const WORSHIP = "/worship";
const LIFE = "/life";
const SCHOOL = "/school";
const COMMUNITY = "/community";
const STORY = "/story";

//  User
const USER = "/users";
const USER_DETAIL = "/:id";
const USER_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  info: INFO,
  worship: WORSHIP,
  life: LIFE,
  school: SCHOOL,
  community: COMMUNITY,
  story: STORY,
  user: USER,
  userDetail: USER_DETAIL,
  userProfile: USER_PROFILE,
  changePassword: CHANGE_PASSWORD
};

export default routes;
