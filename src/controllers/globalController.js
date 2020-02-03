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
  let worships = [],
    lives = [],
    stories = [];
  try {
    worships = await prisma.worships({ where: { content_contains: term } });
    lives = await prisma.lives({ where: { content_contains: term } });
    stories = await prisma.stories({ where: { content_contains: term } });
    res.status(200);
    res.render("search", {
      pageTitle: "Search",
      worships,
      lives,
      stories,
      term
    });
  } catch (error) {
    res.status(400);
    res.redirect(routes.home);
  }
};

export const searchWorship = (req, res) => {
  res.render("searchWorship", { pageTitle: "search-worship" });
};

export const searchLife = (req, res) => {
  res.render("searchLife", { pageTitle: "search-life" });
};

export const searchStory = (req, res) => {
  res.render("searchStory", { pageTitle: "search-story" });
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
