//  Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
const ABOUT = "/about";
const WORSHIP = "/worship";
const LIFE = "/life";
const SCHOOL = "/school";
const COMMUNITY = "/community";
const STORY = "/story";

//  User
const USER = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

const routes = {
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
  changePassword: CHANGE_PASSWORD
};

export default routes;
