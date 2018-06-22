/*
  Model file for parties
*/

const { db } = require('../db/index');

const fetchParties = () => {
  return db.many("SELECT * FROM parties;");
};

const createNewParty = (body) => {
  return db.one('INSERT INTO parties (party) VALUES ($1) RETURNING party_id, party;', [body.party]);
};

module.exports = {fetchParties, createNewParty};