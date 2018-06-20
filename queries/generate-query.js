const pgp = require('pg-promise')({ promiseLib: Promise, capSQL: true });

const generateQuery = (columns, table, rawData) => {
  const queryColumns = new pgp.helpers.ColumnSet(columns, { table });
  return pgp.helpers.insert(rawData, queryColumns);
}

module.exports = generateQuery;