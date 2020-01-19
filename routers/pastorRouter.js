import express from "express";
import routes from "../routes";
import { pastorHome } from "../controllers/pastorController";

const pastorRouter = express.Router();

pastorRouter.get(routes.home, pastorHome);

export default pastorRouter;
