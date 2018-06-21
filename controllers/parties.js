//const db = require('../db');
const { fetchParties } = require("../db/index");

const getAllParties = (req, res) => {
  fetchParties((err, parties) => {
    res.status(200).send({ parties });
  });
};

module.exports = { getAllParties };
