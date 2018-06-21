// const db = require("../db");
const { fetchConstituencies } = require("../db/index");

const getAllConstituencies = (req, res) => {
  fetchConstituencies((err, constituencies) => {
    res.status(200).send({ constituencies });
  });
};

module.exports = { getAllConstituencies };
