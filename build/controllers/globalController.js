"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.story = exports.community = exports.school = exports.life = exports.worship = exports.about = exports.searchStory = exports.searchLife = exports.searchWorship = exports.search = exports.logout = exports.getLogin = exports.getJoin = exports.home = void 0;

var _routes = _interopRequireDefault(require("../routes"));

var _prismaClient = require("../generated/prisma-client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//  Home
var home = function home(req, res) {
  res.render("home", {
    pageTitle: "Home"
  });
}; //  Login Function


exports.home = home;

var getJoin = function getJoin(req, res) {
  res.render("join", {
    pageTitle: "Join"
  });
};

exports.getJoin = getJoin;

var getLogin = function getLogin(req, res) {
  res.render("login", {
    pageTitle: "Login"
  });
};

exports.getLogin = getLogin;

var logout = function logout(req, res) {
  res.redirect(_routes["default"].home);
}; //  Search


exports.logout = logout;

var search =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var term, worships, lives, stories;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            term = req.query.term;
            worships = [], lives = [], stories = [];
            _context.prev = 2;
            _context.next = 5;
            return _prismaClient.prisma.worships({
              where: {
                content_contains: term
              }
            });

          case 5:
            worships = _context.sent;
            _context.next = 8;
            return _prismaClient.prisma.lives({
              where: {
                content_contains: term
              }
            });

          case 8:
            lives = _context.sent;
            _context.next = 11;
            return _prismaClient.prisma.stories({
              where: {
                content_contains: term
              }
            });

          case 11:
            stories = _context.sent;
            res.status(200);
            res.render("search", {
              pageTitle: "Search",
              worships: worships,
              lives: lives,
              stories: stories,
              term: term
            });
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](2);
            res.status(400);
            res.redirect(_routes["default"].home);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 16]]);
  }));

  return function search(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.search = search;

var searchWorship = function searchWorship(req, res) {
  res.render("searchWorship", {
    pageTitle: "search-worship"
  });
};

exports.searchWorship = searchWorship;

var searchLife = function searchLife(req, res) {
  res.render("searchLife", {
    pageTitle: "search-life"
  });
};

exports.searchLife = searchLife;

var searchStory = function searchStory(req, res) {
  res.render("searchStory", {
    pageTitle: "search-story"
  });
}; // Navigation


exports.searchStory = searchStory;

var about = function about(req, res) {
  res.render("about", {
    pageTitle: "Info"
  });
};

exports.about = about;

var worship = function worship(req, res) {
  res.render("worship", {
    pageTitle: "Worship"
  });
};

exports.worship = worship;

var life = function life(req, res) {
  res.render("life", {
    pageTitle: "Life"
  });
};

exports.life = life;

var school = function school(req, res) {
  res.render("school", {
    pageTitle: "School"
  });
};

exports.school = school;

var community = function community(req, res) {
  res.render("community", {
    pageTitle: "Community"
  });
};

exports.community = community;

var story = function story(req, res) {
  res.render("story", {
    pageTitle: "Story"
  });
};

exports.story = story;