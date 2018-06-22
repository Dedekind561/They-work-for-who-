/*
  Model file for parties
*/

const { db } = require("../db/index");

const fetchParties = () => {
  return db.many("SELECT * FROM parties;");
};

const createNewParty = body => {
  return db.one(
    "INSERT INTO parties (party) VALUES ($1) RETURNING party_id, party;",
    [body.party]
  );
};

const removeParty = param => {
  console.log(param);
  return db.none("DELETE FROM parties WHERE parties.party_id = $1;", [
    param.party_id
  ]);
};

module.exports = { fetchParties, createNewParty, removeParty };
