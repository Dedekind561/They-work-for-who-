// const db = require("../db");
const { fetchConstituencies } = require("../db/cons");

const getAllConstituencies = (req, res) => {
  fetchConstituencies().then(constituencies => {
    res.status(200).send({ constituencies });
  }).catch(console.log);
};

module.exports = { getAllConstituencies };
