/*
  Controller file for constituencies
*/

// const db = require("../db");
const { fetchConstituencies, amendConstituencyName } = require("../db/cons");

const getAllConstituencies = (req, res) => {
  fetchConstituencies()
    .then(constituencies => {
      res.status(200).send({ constituencies });
    })
    .catch(console.log);
};

const changeConstituencyName = (req, res) => {
  amendConstituencyName(req.body, req.params)
    .then(constituencies => {
      res.status(200).send({ constituencies });
    })
    .catch(console.log);
};

module.exports = { getAllConstituencies, changeConstituencyName };
