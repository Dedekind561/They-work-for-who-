const { dbConfig } = require("../config");
const pgp = require("pg-promise")({ promiseLib: Promise, capSQL: true });
const db = pgp(dbConfig);
// const db = pgp("postgres://localhost:5432/mps");

const fetchParties = cb => {
  db.many("SELECT * FROM parties;")
    .then(parties => {
      return cb(null, parties);
    })
    .catch();
};

const fetchMPs = (query, cb) => {
  let where = "";
  let queryValue = "";
  if (query.party) {
    where = "WHERE parties.party = $1;";
    queryValue = query.party;
  } else if (query.constituency) {
    where = "WHERE constituencies.constituency = $1";
    queryValue = query.constituency;
  }
  db.many(
    `SELECT * FROM politicians JOIN parties ON politicians.party = parties.party_id JOIN constituencies ON politicians.constituency = constituencies.constituency_id ${where}`,
    [queryValue]
  ).then(mps => {
    return cb(null, mps);
  });
};

const fetchMPByID = (param, cb) => {
  db.one(
    "SELECT * FROM politicians JOIN parties ON politicians.party = parties.party_id JOIN constituencies ON politicians.constituency = constituencies.constituency_id WHERE politician_id = $1;",
    [param.politician_id]
  ).then(mp => {
    return cb(null, mp);
  });
};

const fetchConstituencies = cb => {
  db.many("SELECT * FROM constituencies;")
    .then(constituencies => {
      return cb(null, constituencies);
    })
    .catch();
};

module.exports = {
  fetchParties,
  fetchMPs,
  fetchConstituencies,
  fetchMPByID,
  db
};
