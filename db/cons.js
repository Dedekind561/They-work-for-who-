const {db} = require('./index');

const fetchConstituencies = () => {
  return db.many("SELECT * FROM constituencies;")
 };

 module.exports = {fetchConstituencies};