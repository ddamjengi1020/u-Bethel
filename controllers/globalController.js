import routes from "../routes";
import { prisma } from "../generated/prisma-client";

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

export const search = async (req, res) => {
  const {
    query: { term }
  } = req;
  let contents = [];
  try {
    contents = await prisma.images({ where: { name: "콩이❤" } }).path();
    res.status(200);
    res.render("search", { pageTitle: "Search", contents });
  } catch (error) {
    res.status(400);
    res.redirect(routes.home);
  }
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
