import express from "express";
import routes from "../routes";
import { getPastorHome, postPastorHome } from "../controllers/pastorController";
import { uploadFile } from "../middlewares";

const pastorRouter = express.Router();

pastorRouter.get(routes.home, getPastorHome);
pastorRouter.post(routes.home, uploadFile, postPastorHome);

export default pastorRouter;
