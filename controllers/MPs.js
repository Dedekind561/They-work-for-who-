/*
  Controller file for MPs
*/

// const db = require("../db/index");
const { fetchMPs, fetchMPByID, removeMPByID } = require("../db/mps");

const getAllMPs = (req, res) => {
  fetchMPs(req.query)
    .then(mps => {
      res.status(200).send({ mps });
    })
    .catch(console.log);
};

const getMPByID = (req, res) => {
  fetchMPByID(req.params)
    .then(mp => {
      res.status(200).send({ mp });
    })
    .catch(console.log);
};

const deleteMPByID = (req, res) => {
  removeMPByID(req.params)
    .then(mp => {
      res.status(204).send({ mp });
    })
    .catch(console.log);
};
module.exports = { getAllMPs, getMPByID, deleteMPByID };
