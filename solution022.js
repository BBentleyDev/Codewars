function reverseWords(str) {
    //   P - string, case should be preserved, can contain spaces and should be retained
    //   R - string, each word in string should be reversed
    //   E - 'double spaces' should return 'elbuod secaps'
    //   P - split string into array for each word, reverse each word, join the strings
      let arr = str.split(' ')
      let newArr = arr.map( word => word.split('').reverse().join(''))
      return newArr.join(' ')
    }

//Top solution
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }