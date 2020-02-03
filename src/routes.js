//  Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const ABOUT = "/about";
const WORSHIP = "/worship";
const LIFE = "/life";
const SCHOOL = "/school";
const COMMUNITY = "/community";
const STORY = "/story";
const SEARCH = "/search";
const SEARCHWORSHIP = "/worship";
const SEARCHLIFE = "/life";
const SEARCHSTORY = "/story";

//  User
const USER = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Park Pastor
const SENIOR_PASTOR = "/park-pastor";

// authentication
const AUTH = "/auth";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  searchWorship: SEARCHWORSHIP,
  searchLife: SEARCHLIFE,
  searchStory: SEARCHSTORY,
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
  seniorPastor: SENIOR_PASTOR,
  auth: AUTH
};

export default routes;
