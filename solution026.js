function highAndLow(numbers){
    let arr = numbers.split(' ')
    
    let highest = Math.max(...arr)
    let lowest = Math.min(...arr)
    
    return `${highest} ${lowest}` 
  }

  //OR

  function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }