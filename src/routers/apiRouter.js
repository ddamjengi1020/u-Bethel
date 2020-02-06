import express from "express";
import { test2, test3, test4 } from "../controllers/globalController";

const apiRouter = express.Router();

apiRouter.post("/test2", test2);
apiRouter.post("/test3", test3);
apiRouter.post("/test4", test4);

export default apiRouter;
