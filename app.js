import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import routes from "./routes";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use("/icon-img", express.static("icon,img"));
app.use("/static", express.static("static"));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);

export default app;
