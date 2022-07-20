function likes(names) {
    //   P - array of names, representing people who liked a post
    //   R - string following the format "name likes this", if array is empty name replaced with "no one", if array length is between 1 and 3 display all names, if array length is greater than 3 display name,name and x others like this, x represents number of names not dipslayed
    //   E - []                                -->  "no one likes this"
    // ["Peter"]                         -->  "Peter likes this"
    // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
    // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
    // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
    //   P - nested if statements checking length of array, have differently formatted strings return dependent on number of names in the array
      if (names.length == 0) {
        return 'no one likes this'  
      } else if (names.length == 1) {
        return `${names[0]} likes this`
      } else if (names.length == 2) {
        return `${names[0]} and ${names[1]} like this`
      } else if (names.length == 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
      } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
      }
    }