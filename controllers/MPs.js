// const db = require("../db/index");
const { fetchMPs, fetchMPByID } = require("../db/index");

const getAllMPs = (req, res) => {
  fetchMPs(req.query, (err, mps) => {
    res.status(200).send({ mps });
  });
};

const getMPByID = (req, res) => {
  fetchMPByID(req.params, (err, mp) => {
    res.status(200).send({ mp });
  });
};

module.exports = { getAllMPs, getMPByID };
