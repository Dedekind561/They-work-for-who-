const generateQuery = require("./generate-query");
const {
  parties,
  constituencies,
  MPs,
  partyLookup,
  constituencyLookup
} = require("../data");
// console.log(partyLookup, "<<<<<<<<");
// console.log(constituencies);

module.exports = {
  insertParties: generateQuery(["party"], { table: "parties" }, parties),
  insertMPs: generateQuery(
    ["politician", "party", "constituency"],
    { table: "politicians" },
    MPs
  ),
  insertConstituencies: generateQuery(
    ["constituency"],
    { table: "constituencies" },
    constituencies
  )
};
