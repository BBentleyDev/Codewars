//https://www.codewars.com/kata/56606694ec01347ce800001b/solutions/javascript
//My solution
function isTriangle(a,b,c)
{
  let sorted = [a,b,c]
  sorted.sort( (a,b) => a-b)
  
  if (sorted[0] + sorted[1] > sorted[2]) {
    return true
  }
   return false;
}
//Best solution
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}