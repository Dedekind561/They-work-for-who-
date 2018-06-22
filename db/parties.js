const { db } = require('../db/index');

const fetchParties = () => {
  return db.many("SELECT * FROM parties;");
};

module.exports = {fetchParties};