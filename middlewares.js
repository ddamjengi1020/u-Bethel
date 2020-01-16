import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "u-Bethel";
  res.locals.routes = routes;
  next();
};
