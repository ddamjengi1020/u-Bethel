import routes from "../routes";

export const pastorHome = (req, res) => {
  res.render("pastor", { pageTitle: "Home" });
};
