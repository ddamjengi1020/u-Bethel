import routes from "../routes";

//  Home

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};

//  Login Function

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

export const logout = (req, res) => {
  res.redirect(routes.home);
};

//  Search

export const search = (req, res) => {
  res.render("search", { pageTitle: "Search" });
};

// Navigation

export const about = (req, res) => {
  res.render("about", { pageTitle: "Info" });
};

export const worship = (req, res) => {
  res.render("worship", { pageTitle: "Worship" });
};

export const life = (req, res) => {
  res.render("life", { pageTitle: "Life" });
};

export const school = (req, res) => {
  res.render("school", { pageTitle: "School" });
};

export const community = (req, res) => {
  res.render("community", { pageTitle: "Community" });
};

export const story = (req, res) => {
  res.render("story", { pageTitle: "Story" });
};
