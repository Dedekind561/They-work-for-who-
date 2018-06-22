const partyRouter = require("express").Router();
const {
  getAllParties,
  addNewParty,
  deleteParty
} = require("../controllers/parties");

partyRouter
  .route("/")
  .get(getAllParties)
  .post(addNewParty);
partyRouter.route("/:party_id").delete(deleteParty);

module.exports = { partyRouter };
