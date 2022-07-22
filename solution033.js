function createPhoneNumber(numbers){
    //   P - array of integers between 0 and 9
    //   R - string, making array of integers into a phone number
    //   E - [1,2,3,4,5,6,7,8,9,0] should return "(123) 456-7890"
    //   P - split into two arrays, one with first 3 another with final 7 numbers. Pop & push to add () to first three. Splice to add '-' to second part. Join both arrays, then return with space in between
      let firstThree = numbers.slice(0,3).join('')
      let middleThree = numbers.slice(3,6).join('')
      let lastFour = numbers.slice(6).join('')
      
      return `(${firstThree}) ${middleThree}-${lastFour}`
    }
//Better solutions
// Using string method replace
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

//Using string method substring
function createPhoneNumber(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' 
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
  }