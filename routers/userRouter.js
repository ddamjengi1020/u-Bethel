import express from "express";
import routes from "../routes";

const userRouter = express.Router();

//  User Info
userRouter.get(routes.user);
userRouter.get(routes.userDetail);
userRouter.get(routes.userProfile);
userRouter.get(routes.changePassword);

export default userRouter;
