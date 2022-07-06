//https://www.codewars.com/kata/54edbc7200b811e956000556/solutions/javascript
//My solution
function countSheeps(arrayOfSheep) {
    let sum = 0
    arrayOfSheep.forEach((val) => val === true ? sum++ : 0)
    return sum
  }
  //Best solution
  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }