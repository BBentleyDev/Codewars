function filter_list(l) {
    //   P - array of values, contains both strings and non negative integers
    //   R - return a new list with all strings filtered out
    //   E - [1,3,'dd',9,'f'] should return [1,3,9]
    //   P - use filter method on array, function should check in type of element is numberrn new array
    return l.filter( e => typeof e === 'number')
    
    }