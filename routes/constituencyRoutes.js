const constituencyRouter = require("express").Router();
const {
  getAllConstituencies,
  changeConstituencyName
} = require("../controllers/constituencies");

constituencyRouter.route("/").get(getAllConstituencies);
constituencyRouter.route("/:con_id").put(changeConstituencyName);

module.exports = { constituencyRouter };
