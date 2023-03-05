

//! Check the console as you code to see how it changes. 

/*In this example, subarray has the value [[10, 11, 12], 13, 14],
 nestedSubarray has the value [10, 11, 12], and element has the value 11 .
Note: There shouldn't be any spaces between the array name and the square brackets,
like array [0][0] and even this array [0] [0] is not allowed.  */

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  console.log(subarray);
  const nestedSubarray = arr[3][0];
  console.log(nestedSubarray);
  const element = arr[3][0][1];
  console.log(element);

  /*.pop() removes the last element from an array and returns that element.
.push() adds the last element to an array and returns that element.
 .shift() comes in. It works just like .pop(), except it removes the first
  element instead of the last.
  unshift() adds the element at the beginning of the array.
 */

const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray= myArray.pop();
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();