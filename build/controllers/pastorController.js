"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postPastorHome = exports.getPastorHome = void 0;

var _routes = _interopRequireDefault(require("../routes"));

var _prismaClient = require("../generated/prisma-client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//  User ID
var getPastorHome =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var image, imgLength, video, vrdLength, imagePath, videoPath;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _prismaClient.prisma.images();

          case 2:
            image = _context.sent;
            _context.next = 5;
            return image.length;

          case 5:
            imgLength = _context.sent;
            _context.next = 8;
            return _prismaClient.prisma.videos();

          case 8:
            video = _context.sent;
            _context.next = 11;
            return video.length;

          case 11:
            vrdLength = _context.sent;

            if (imgLength > 0 && vrdLength > 0) {
              imagePath = image[imgLength - 1].path;
              videoPath = video[vrdLength - 1].path;
              res.render("pastor", {
                pageTitle: "Home",
                imagePath: imagePath,
                videoPath: videoPath
              });
            } else {
              res.render("pastor", {
                pageTitle: "Home"
              });
            }

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPastorHome(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPastorHome = getPastorHome;

var postPastorHome =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$file, mimetype, originalname, path, jsonFile, type, name;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$file = req.file, mimetype = _req$file.mimetype, originalname = _req$file.originalname, path = _req$file.path, jsonFile = req.file;
            type = mimetype.split("/")[0];
            name = originalname.split(".")[0];
            _context2.prev = 3;

            if (!(type === "image")) {
              _context2.next = 7;
              break;
            }

            _context2.next = 7;
            return _prismaClient.prisma.createImage({
              name: name,
              path: path,
              file: jsonFile
            });

          case 7:
            if (!(type === "video")) {
              _context2.next = 10;
              break;
            }

            _context2.next = 10;
            return _prismaClient.prisma.createVideo({
              title: name,
              path: path,
              file: jsonFile
            });

          case 10:
            res.status(200);
            res.redirect(_routes["default"].seniorPastor);
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);
            res.redirect(_routes["default"].home);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 14]]);
  }));

  return function postPastorHome(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postPastorHome = postPastorHome;