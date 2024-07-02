// PROBLEM STATEMENT:
    // Given an array of intergers, calculate the cumulative sum of the array.

// My interpretation of the above problem statement
    // Create a function that takes an array of numbers and returns a number that is the sum of all values in the array.
    // Given an array of integers, calculate the cumulative sum of the array — (just total up all the elements in the array).





// Solution 1
// const sum = [1,3,5,7].reduce((acc, cur) => acc + cur, 0);





// Solution 2 — loops over every number AND prints the sum
// export function sum(arr) {
//     let total = 0;

//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//         total += arr[i];
//     }

//     return total;
// }

// console.log(sum([1,3,5,7]));





// Solution 3 — Just prints the sum
export function cumSum(arr) {
    let total = 0;
    
    for(let i = 0; i < arr.length; i++) {
      total += arr[i];
    } 
    
    return total;
  }
  
  console.log('sum: ', cumSum([1,3,5,7]));