/*
  Controller file for parties
*/

const { fetchParties, createNewParty, removeParty } = require("../db/parties");

const getAllParties = (req, res) => {
  fetchParties()
    .then(parties => {
      res.status(200).send({ parties });
    })
    .catch(console.log);
};

const addNewParty = (req, res) => {
  createNewParty(req.body)
    .then(newParty => {
      res.status(201).send({ newParty });
    })
    .catch(console.log);
};

const deleteParty = (req, res) => {
  removeParty(req.params)
    .then(party => {
      res.status(204).send({ msg: "Deletion in progress" });
    })
    .catch(console.log);
};

module.exports = { getAllParties, addNewParty, deleteParty };
