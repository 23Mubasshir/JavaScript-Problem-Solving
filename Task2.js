// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


function sumOfPositiveNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        sum += array[i];
      }
    }
    return sum;
  }
  
  // Test 
  const inputArr = [2, -5, 10, -3, 7];
  const result = sumOfPositiveNumbers(inputArr);
  console.log(result); // Output: 19
