import express from "express";
import routes from "../routes";
import {
  getUserDetail,
  getEditProfile,
  getChangePassword,
  getUser
} from "../controllers/userController";

const userRouter = express.Router();

//  User Info
userRouter.get(routes.user, getUser);
userRouter.get(routes.userDetail, getUserDetail);
userRouter.get(routes.editProfile, getEditProfile);
userRouter.get(routes.changePassword, getChangePassword);

export default userRouter;
