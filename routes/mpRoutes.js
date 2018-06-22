const mpsRouter = require("express").Router();
const { getAllMPs, getMPByID, deleteMPByID } = require("../controllers/MPs");

mpsRouter.route("/").get(getAllMPs);
mpsRouter
  .route("/:politician_id")
  .get(getMPByID)
  .delete(deleteMPByID);

module.exports = { mpsRouter };
