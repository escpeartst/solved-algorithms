/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let stoneCount = 0;
  J.split("").forEach(jewel => {
    let reg     = new RegExp(jewel, 'g');
    let matches = S.match(reg);

    if (matches > 0) {
      stoneCount += matches.length;
    }
  });
  return stoneCount;
};

console.log( numJewelsInStones("aA", "aAAbbbb") );
