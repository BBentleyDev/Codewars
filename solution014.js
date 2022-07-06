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