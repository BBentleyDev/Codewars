function sumDigPow(a, b) {
    //   P - two integers representing a range (inclusive)
    //   R - a sorted list of numbers that fulfill the following property: for each number, raise each to its consecutive power, sum results. Return true if summed result == original number
    //       eg. 89 = 8 ** 1 + 9 ** 2. Return empty list if no numbers fufill property
    //   E - arguments of (1,10) would return [1,2,3,4,5,6,7,8,9]. Arguments of (1,100) would return [1,2,3,4,5,6,7,8,9,89]
    //   P - iterate through each number in the range, convert to string, split each digit, raise it to the power of it's index + 1 using reduce to keep track of the total. If total == number of current iteration then add to return array
    let eureka = []
        for (a; a <= b; a++) {
          
            let number = a.toString().split('')
            let sumOfDigits = 0
          
            for (let i = 0; i < number.length; i++ ) {
                sumOfDigits += Math.pow(number[i], i+1)
            }

            sumOfDigits == a ? eureka.push(a) : 0
        }
    return eureka
}

//Better solution
function sumDigPow(a, b) {
    var ans = [];
    while(a <= b){
      if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
        ans.push(a);
      a++;
    }
    return ans;
  }