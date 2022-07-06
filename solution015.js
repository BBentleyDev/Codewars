function accum(s) {
	let sToArr = s.split('')
  let answer = sToArr.map( (char, i) => char.toUpperCase() + char.repeat(i).toLowerCase() )
  return answer.join('-')  
}

//Top solution
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }