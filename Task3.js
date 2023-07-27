// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function findMostFrequentElement(array) {
    const frequencyMap = {};
    
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    }
  
    let mostFrequentElement;
    let highestFrequency = 0;
    for (const element in frequencyMap) {
      if (frequencyMap[element] > highestFrequency) {
        mostFrequentElement = element;
        highestFrequency = frequencyMap[element];
      }
    }
  
    return mostFrequentElement;
  }
  
  // Test 
  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const result = findMostFrequentElement(inputArray);
  console.log(result); // Output: 3