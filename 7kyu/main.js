//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/solutions/javascript
//My solution
function longest(s1, s2) {
    // your code
    let combinedString = s1 + s2
    let arr = combinedString.split('').sort()
    let longestString = arr.filter( (char,index) => arr.indexOf(char) == index)
    return longestString.join('')
  }
//Best solution
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')