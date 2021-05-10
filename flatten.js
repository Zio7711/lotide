const assert = require("chai").assert;
const flatten = arr => {
  let flattenArr = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      for (let el2 of el) {
        flattenArr.push(el2);
      }
    } else {
      flattenArr.push(el);
    }
  }
  return flattenArr;
};
assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
console.log(flatten([1, 2, [3, 4], 5, [6]]));

