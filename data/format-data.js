const formatData = MPData => {
  const initialAcc = {
    parties: [],
    partyLookup: {},
    constituencyLookup: {},
    constituencies: [],
    MPs: []
  };

  return MPData.reduce(
    ({ parties, partyLookup, constituencyLookup, constituencies, MPs }, MP) => {
      if (!partyLookup[MP.party]) {
        parties.push({ party: MP.party });
        partyLookup[MP.party] = parties.length;
      }
      constituencies.push({ constituency: MP.constituency });
      constituencyLookup[MP.constituency] = constituencies.length;

      MPs.push({
        politician: MP.name,
        party: partyLookup[MP.party],
        constituency: constituencyLookup[MP.constituency]
      });

      return { parties, partyLookup, constituencies, constituencyLookup, MPs };
    },
    initialAcc
  );
};

module.exports = formatData;
