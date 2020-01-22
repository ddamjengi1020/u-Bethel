import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import path from "path";

import routes from "./routes";
import { localsMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import pastorRouter from "./routers/pastorRouter";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/upload", express.static(path.join(__dirname, "upload")));
app.use("/icon-img", express.static(path.join(__dirname, "icon_img")));
app.use("/font", express.static("font"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.seniorPastor, pastorRouter);

export default app;
