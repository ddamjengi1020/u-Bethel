import routes from "./routes";
import multer from "multer";

const upload = multer({ dest: "upload/" });

export const uploadFile = upload.single("file");

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "u-Bethel";
  res.locals.routes = routes;
  res.locals.adminIP = process.env.ADMINIP;
  next();
};