/*
  Controller file for MPs
*/


// const db = require("../db/index");
const { fetchMPs, fetchMPByID } = require("../db/mps");

const getAllMPs = (req, res) => {
  fetchMPs(req.query).then(mps => {
    res.status(200).send({mps});
  }).catch(console.log);
}

const getMPByID = (req, res) => {
  fetchMPByID(req.params).then(mp => {
    res.status(200).send({ mp });
  }).catch(console.log);
};

module.exports = { getAllMPs, getMPByID };
