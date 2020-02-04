import routes from "./routes";
import multer from "multer";

const upload = multer({ dest: "upload/" });

export const uploadFile = upload.single("file");

export const localsMiddleware = async (req, res, next) => {
  res.locals.siteName = "u-Bethel";
  res.locals.routes = routes;

  next();
};
