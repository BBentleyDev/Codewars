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

//https://www.codewars.com/kata/56606694ec01347ce800001b/solutions/javascript
//My solution
function isTriangle(a,b,c)
{
  let sorted = [a,b,c]
  sorted.sort( (a,b) => a-b)
  
  if (sorted[0] + sorted[1] > sorted[2]) {
    return true
  }
   return false;
}
//Best solution
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}