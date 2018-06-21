const constituencyRouter = require("express").Router();
const { getAllConstituencies } = require("../controllers/constituencies");

constituencyRouter.route("/").get(getAllConstituencies);

module.exports = { constituencyRouter };
