//https://www.codewars.com/kata/53af2b8861023f1d88000832/solutions/javascript
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }

//https://www.codewars.com/kata/53ee5429ba190077850011d4/solutions/javascript
  function doubleInteger(i) {
    return i * 2;
  }

//https://www.codewars.com/kata/56b1f01c247c01db92000076/solutions/javascript
  function doubleChar(str) {
    // Your code here
    let strArr = str.split('')
    let doubledArr = strArr.map( char => char + char)
    let doubledStr = doubledArr.join('')
    return doubledStr
  }

//https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/solutions/javascript
  function stringToArray(string){

    const strToArray = string.split(' ')
    return strToArray
  }

//https://www.codewars.com/kata/5ab6538b379d20ad880000ab/solutions/javascript
  const areaOrPerimeter = function(l , w) {
    return l === w ? l * w : (l * 2) + (w * 2)
  };

//https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/solutions/javascript
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

//https://www.codewars.com/kata/55d24f55d7dd296eb9000030/solutions/javascript
//My solution & best solution
var summation = function (num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}

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