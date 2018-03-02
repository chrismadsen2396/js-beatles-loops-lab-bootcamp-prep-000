function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];
  for ( var i = musicians.length - 1; i >= 0; i--) {
    beatlesArray = [`${musicians[i]} plays ${instruments[i]}`, ...beatlesArray];
  }
  return beatlesArray;
}

function johnLennonFacts(facts) {
  var n = johnLennonFacts.length;
  while (n > 0) {
    facts[n] = `${facts[n]}!!!`;
  }
  return facts;
}