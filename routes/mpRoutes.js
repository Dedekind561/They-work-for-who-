const mpsRouter = require("express").Router();
const { getAllMPs, getMPByID } = require("../controllers/MPs");

mpsRouter.route("/").get(getAllMPs);
mpsRouter.route("/:politician_id").get(getMPByID);

module.exports = { mpsRouter };
