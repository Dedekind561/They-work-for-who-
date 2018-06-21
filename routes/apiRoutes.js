const apiRouter = require("express").Router();
const { mpsRouter } = require("./mpRoutes");
const { constituencyRouter } = require("../routes/constituencyRoutes");
const { partyRouter } = require("./partyRoutes");

apiRouter.get("/", (req, res) => {
  res.status(200).send({ msg: "API main page" });
});

apiRouter.use("/mps", mpsRouter);
apiRouter.use("/constituencies", constituencyRouter);
apiRouter.use("/parties", partyRouter);

module.exports = { apiRouter };
