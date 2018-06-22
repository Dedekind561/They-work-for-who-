const partyRouter = require("express").Router();
const { getAllParties, addNewParty } = require("../controllers/parties");

partyRouter.route("/").get(getAllParties).post(addNewParty);

module.exports = { partyRouter };
