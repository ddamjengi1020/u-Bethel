import express from "express";
import routes from "../routes";
import { home } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

//  Logged
globalRouter.get(routes.join);
globalRouter.get(routes.login);
globalRouter.get(routes.logout);
globalRouter.get(routes.search);

//  Nav
globalRouter.get(routes.info);
globalRouter.get(routes.worship);
globalRouter.get(routes.life);
globalRouter.get(routes.school);
globalRouter.get(routes.community);
globalRouter.get(routes.story);

export default globalRouter;
