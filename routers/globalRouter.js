import express from "express";
import routes from "../routes";
import {
  home,
  getJoin,
  logout,
  about,
  worship,
  life,
  school,
  community,
  story,
  getLogin,
  search
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

//  Logged
globalRouter.get(routes.join, getJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

//  Nav
globalRouter.get(routes.about, about);
globalRouter.get(routes.worship, worship);
globalRouter.get(routes.life, life);
globalRouter.get(routes.school, school);
globalRouter.get(routes.community, community);
globalRouter.get(routes.story, story);

export default globalRouter;
