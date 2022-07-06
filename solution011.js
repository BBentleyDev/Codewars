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