// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array must have at least two elements.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      return "Error: No second smallest element found.";
    }
  
    return secondSmallest;
  }
  
  // Test
  const inputArr = [5, 2, 8, 1, 9, 3, 6];
  const result = findSecondSmallest(inputArr);
  console.log(result); // Output: 2