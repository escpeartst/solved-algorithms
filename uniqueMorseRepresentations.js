/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let uniques = {};
    let codeMap = {
      "a": ".-",
      "b": "-...",
      "c": "-.-.",
      "d": "-..",
      "e": ".",
      "f": "..-.",
      "g": "--.",
      "h": "....",
      "i": "..",
      "j": ".---",
      "k": "-.-",
      "l": ".-..",
      "m": "--",
      "n": "-.",
      "o": "---",
      "p": ".--.",
      "q": "--.-",
      "r": ".-.",
      "s": "...",
      "t": "-",
      "u": "..-",
      "v": "...-",
      "w": ".--",
      "x": "-..-",
      "y": "-.--",
      "z": "--.."
    };

    words.forEach(word => {
      let convertedCode = '';
      for(x in word) {
        convertedCode += codeMap[word[x]];
      }

      uniques[convertedCode] = 1;
    });

    return Object.keys(uniques).length;
};

let words = ["gin", "zen", "gig", "msg"];

console.log( uniqueMorseRepresentations(words) );
