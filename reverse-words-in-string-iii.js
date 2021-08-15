const string = "Let's take LeetCode contest";

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    return s.split(' ').map((str) => str.split('').reverse().join('')).join(' ')

};

console.log( reverseWords(string) );
