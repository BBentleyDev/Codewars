function abbrevName(name){
    //P - string, two words, seperated by space
    //R - string, first character of each word, seperated by .
    //E - "Sam Harris" should return 'S.H'
    //P 
    //split string into array of two words
    //pull first char out of each string
    //join them together with a . between them
    let splitNames = name.split(' ')
    let firstWord = splitNames[0].charAt(0).toUpperCase()
    let secondWord = splitNames[1].charAt(0).toUpperCase()
    return `${firstWord}.${secondWord}`
    
  }

  //Best solution
  function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }