/*
  Controller file for parties
*/

const { fetchParties, createNewParty } = require("../db/parties");

const getAllParties = (req, res) => {
  fetchParties().then(parties => {
    res.status(200).send({parties})
  }).catch(console.log);
}

const addNewParty = (req, res) => {
  createNewParty(req.body).then(newParty => {
    res.status(201).send({newParty});
  }).catch(console.log);
}

module.exports = { getAllParties, addNewParty };
