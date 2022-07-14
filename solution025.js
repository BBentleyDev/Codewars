function squareDigits(num){
    let numStr = num + ''
    let total = ''
    
    for (let i in numStr) {
      total += (parseInt(numStr[i] ** 2 + ''))
    }
    
    return parseInt(total)
  }

  function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }