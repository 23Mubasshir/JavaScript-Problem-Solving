// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(s) {
    const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };

    let result = 0;
    for (let i = 0; i < s.length; i++) {
      let value = map[s[i]]; 
      if (i + 1 < s.length) {
        let nextValue = map[s[i + 1]];
        if (nextValue > value) {
          value = nextValue - value; 
        }
      }
      result += value;
    }
    return result;
  }
  // Test
  const number = "XXI";
  console.log(`Result is ${romanToInt(number)}`); //