const formatData = MPData => {
  const initialAcc = {
    parties: [],
    partyLookup: {},
    constituencyLookup: {},
    constituencies: [],
    MPs: []
  };

  return MPData.reduce(
    (
      { parties, partyLookup, constituencyLookup, constituencies, MPs },
      MP,
      index
    ) => {
      if (!partyLookup[MP.party]) {
        parties.push({ name: MP.party });
        partyLookup[MP.party] = parties.length;
      }

      return { parties, partyLookup };
      // console.log(MP.party);
      //check if party name is already in partyLookup
      //if it is, dont push
      // if not push party name to parties array, add part name to partyLookup

      // parties = Array.from(new Set(parties));
      // constituencies.push({ name: MP.constituency });
    },
    initialAcc
  );
};

//parties, partyLookup, constituencyLookup, constituencies, MPs

module.exports = formatData;
