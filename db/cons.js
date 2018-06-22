/*
  Model file for constituencies
*/

const { db } = require("./index");

const fetchConstituencies = () => {
  return db.many("SELECT * FROM constituencies ORDER BY constituency_id ASC;");
};

const amendConstituencyName = (body, param) => {
  console.log(body);
  console.log(param);
  return db.none(
    `UPDATE constituencies SET constituency = $1 WHERE constituency_id = $2;`,
    [body.constituency, param.con_id]
  );
};

module.exports = { fetchConstituencies, amendConstituencyName };
