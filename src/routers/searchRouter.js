import express from "express";
import routes from "../routes";
import {
  searchWorship,
  searchLife,
  searchStory,
  search
} from "../controllers/globalController";

const searchRouter = express.Router();

searchRouter.get(routes.home, search);
searchRouter.get(routes.searchWorship, searchWorship);
searchRouter.get(routes.searchLife, searchLife);
searchRouter.get(routes.searchStory, searchStory);

export default searchRouter;
