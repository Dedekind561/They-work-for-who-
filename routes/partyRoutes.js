const partyRouter = require("express").Router();
const { getAllParties } = require("../controllers/parties");

partyRouter.route("/").get(getAllParties);

module.exports = { partyRouter };
