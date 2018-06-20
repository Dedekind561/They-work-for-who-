
const { dbConfig } = require('../config')
const pgp = require('pg-promise')({ promiseLib: Promise, capSQL: true });
const db = pgp(dbConfig);
module.exports = db;