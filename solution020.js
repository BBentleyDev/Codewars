function getCount(str) {
    //   P - string, only lower cases, no spaces
    //   R - integer, representing number of vowels in string that is passed in. y is not conisdered a vowel
    //   E - 'feeling' should return 3, as it contains e,e,i
    //   P - create counter variable and array containing all vowels. Iterate through the string using for/let loop, adding one to counter if char at that iteration is present in array. Return counter
      
      let counter = 0
      let vowels = ['a','e','i','o','u']
      
      for(let char of str) {
        vowels.includes(char) ? counter++ : 0
      }
    
      return counter
      
      }