//https://www.codewars.com/kata/56b1f01c247c01db92000076/solutions/javascript
function doubleChar(str) {
    // Your code here
    let strArr = str.split('')
    let doubledArr = strArr.map( char => char + char)
    let doubledStr = doubledArr.join('')
    return doubledStr
  }
