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
  let worships = await prisma.worships({ where: { content_contains: term } });
  let lives = await prisma.lives({ where: { content_contains: term } });
  let stories = await prisma.stories({ where: { content_contains: term } });
  res.render("search", {
    pageTitle: "Search",
    term,
    worships,
    lives,
    stories
  });
};

export const test2 = async (req, res) => {
  const url = req.headers.referer;
  const term = url.split("=")[1];
  try {
    let worships = await prisma.worships({
      where: { content_contains: term },
      skip: 10 * (req.body.data - 1),
      first: 10
    });
    res.render("test2", { worships });
  } catch (error) {
    console.log(error);
  }
};

export const test3 = async (req, res) => {
  const url = req.headers.referer;
  const term = url.split("=")[1];
  try {
    let lives = await prisma.lives({
      where: { content_contains: term },
      skip: 10 * (req.body.data - 1),
      first: 10
    });
    res.render("test3", { lives });
  } catch (error) {
    console.log(error);
  }
};
export const test4 = async (req, res) => {
  const url = req.headers.referer;
  const term = url.split("=")[1];
  try {
    let stories = await prisma.stories({
      where: { content_contains: term },
      skip: 10 * (req.body.data - 1),
      first: 10
    });
    res.render("test4", { stories });
  } catch (error) {
    console.log(error);
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
