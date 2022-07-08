function XO(str) {
    //   P - sinlge string of undetermined length, can contanin any char
    //   R  - bool representing if number of x's === o's in the string, if no x's or o's also return true
    //   E - 'xxxm' would return false, 'xxxoooxo' would return true
    //   P - iterate through the string, counting number of x's or o's, compare totals of count variables, return true if equal and false otherwise
      
    let sumOfX = str.toLowerCase().split('').filter( x => x === 'x')
    let sumOfO = str.toLowerCase().split('').filter( x => x === 'o')
    
    return sumOfX.length === sumOfO.length ? true : false
}