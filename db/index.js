const { dbConfig } = require("../config");
const pgp = require("pg-promise")({ promiseLib: Promise, capSQL: true });
const db = pgp(dbConfig);
// const db = pgp("postgres://localhost:5432/mps");



module.exports = { db };
