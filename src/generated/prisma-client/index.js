"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Image",
    embedded: false
  },
  {
    name: "Video",
    embedded: false
  },
  {
    name: "Worship",
    embedded: false
  },
  {
    name: "Life",
    embedded: false
  },
  {
    name: "Story",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/ddamjengi-b0c2c4/u-bethel/dev`
});
exports.prisma = new exports.Prisma();
