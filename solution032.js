function findEvenIndex(arr) {
    //   P - array of integers, can be positive or negative, length can be 0 - 1000
    //   R - index where sum of integers to each side of that index are equal. Return -1 if condition can not be met
    //   E - {1,2,3,4,3,2,1} shoudl return 3, because at the third index (4) the sum of the integers to either side equal 6
    //   P - for loop iterating over each index in the array, nest within two reduce calls, one for integers before current index and one after. Then compare accumulators, if equal return current index, otherwise continue to next index.
      
       for (let i = 0; i < arr.length; i++) {
          let leftSide = arr.slice(0,i).reduce( (sum,num) => sum + num, 0)
          let rightSide = arr.slice(i+1,arr.length).reduce( (sum,num) => sum + num, 0)
          
          if (leftSide == rightSide) {
            return i
          }
       }
      return -1
    }