/*
  Model file for MPS
*/

const { db } = require("./index");

const fetchMPs = query => {
  let where = "";
  let queryValue = "";
  if (query.party) {
    where = "WHERE parties.party = $1";
    queryValue = query.party;
  } else if (query.constituency) {
    where = "WHERE consitituencies.constituency = $1";
    queryValue = query.constituency;
  }
  return db.many(
    `SELECT * FROM politicians JOIN parties ON politicians.party = parties.party_id JOIN constituencies ON politicians.constituency = constituencies.constituency_id ${where}`,
    [queryValue]
  );
};

const fetchMPByID = param => {
  return db.one(
    "SELECT * FROM politicians JOIN parties ON politicians.party = parties.party_id JOIN constituencies ON politicians.constituency = constituencies.constituency_id WHERE politician_id = $1;",
    [param.politician_id]
  );
};

const removeMPByID = param => {
  return db.none("DELETE FROM politicians WHERE politician_id = $1;", [
    param.politician_id
  ]);
};

module.exports = { fetchMPByID, fetchMPs, removeMPByID };
