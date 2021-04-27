const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Passed: ${actual} !== ${expected}`);
  }
};


const tail = function(array) {
  return array.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
let result = tail(words); // no need to capture the return value since we are not checking it
assertEqual(result.length, 2); // original array should still have 3 elements!
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
