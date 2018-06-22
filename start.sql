DROP DATABASE IF EXISTS mps;
CREATE DATABASE mps;
\c mps;
CREATE TABLE parties
(
  party_id SERIAL PRIMARY KEY,
  party VARCHAR(50)
);
CREATE TABLE constituencies
(
  constituency_id SERIAL PRIMARY KEY,
  constituency VARCHAR(150)
);
CREATE TABLE politicians
(
  politician_id SERIAL PRIMARY KEY,
  politician VARCHAR(50),
  party INT,
  constituency INT,
  FOREIGN KEY (party) REFERENCES parties(party_id) ON DELETE CASCADE,
  FOREIGN KEY (constituency) REFERENCES constituencies(constituency_id)
); 

-- CREATE TABLE committees (

-- );



