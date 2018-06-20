const generateQuery = require('./generate-query');
const { parties, constituencies, MPs } = require('../data')


module.exports = {
  insertParties: generateQuery(['name'], { table: 'parties' }, parties)
  // insertMPs: generateQuery(['name', 'party', 'constituency'], { table: 'politicians' }, MPs),
  // insertConstituencies: generateQuery(['name'], { table: 'constituencies' }, constituencies)
}
