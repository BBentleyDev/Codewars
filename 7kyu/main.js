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

//https://www.codewars.com/kata/5949481f86420f59480000e7/solutions/javascript
//My solution
function oddOrEven(array) {
  let sum = array.reduce( (sum,val) => sum + val, 0)
  return sum % 2 === 0 ? 'even' : 'odd' 
}
//Best solution
function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/solutions/javascript
//My solution
function rowSumOddNumbers(n) {
  let sum = 0
  let startingVal = n * n - (n - 1)
  
	for (let i = 0; i < n; i++) {
    sum += startingVal
    startingVal += 2
  }
  return sum
}
//Best solution
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}