//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/solutions/javascript
//My solution
function past(h, m, s){
    let msHour = h * 3600000
    let msMinute = m * 60000
    let msSecond = s * 1000
    
    return msHour + msMinute + msSecond
  }
  //Best solution
  function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }