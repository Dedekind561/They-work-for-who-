//const db = require('../db');
const { fetchParties } = require("../db/parties");

const getAllParties = (req, res) => {
  fetchParties().then(parties => {
    res.status(200).send({parties})
  }).catch(console.log);
}

module.exports = { getAllParties };
