const db = require("./db");
const { insertParties, insertConstituencies, insertMPs } = require("./queries");

// db.none(insertParties)
//   // .then(() => {
//   //   return db.many('SELECT * FROM parties;')
//   // })
//   // .then(parties => {
//   //   console.log('>>>>', parties, '<<<<')
//   // })
//   // .then(() => {
//   //   return db.none(constituencyQuery)
//   // })
//   // .then(() => {
//   //   return db.none(MPquery)
//   // })
//   // .then(console.log)
//   .catch(console.log);
