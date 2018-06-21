const { db } = require("./db/index");
const { insertParties, insertConstituencies, insertMPs } = require("./queries");

db.none(insertParties)
  .then(() => {
    return db.many("SELECT * FROM parties;");
  })
  .then(parties => {
    // console.log(">>>>", parties, "<<<<");
  })
  .then(() => {
    // console.log("you are at constituencyQuery <<<<<<<");
    return db.none(insertConstituencies);
  })
  .then(() => {
    return db.none(insertMPs);
  })
  .then(console.log)
  .catch(console.log);
