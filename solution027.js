const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

//Regex top solution
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }