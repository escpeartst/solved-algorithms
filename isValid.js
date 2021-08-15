let isValid = string => {

  let map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  let end = string.length - 1;

  for( let i = 0; i < Math.floor(string.length / 2); i++) {

    if (map[string[i]] !== string[end - i]) {
      return false;
    }
  }

  return true;
}

console.log( isValid('({})') );
console.log( isValid('({]') );

console.log( isValid('((()())))'))
