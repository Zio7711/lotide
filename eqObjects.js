const assertEqual = require('./assertEqual.js');
const eqArrays = require('./eqArrays.js');

const eqObjects = function(object1, object2) {
  const lengthOfObj1 = Object.keys(object1).length;
  const lengthOfObj2 = Object.keys(object2).length;
// if the object length is different return false
  if (lengthOfObj1 !== lengthOfObj2) {
    return false;
  }

// for loop starts, iterate keys
  for (const key in object2) {
    // check if value is an array
    if(Array.isArray(object1[key])){ 
//if eqArrays returns false, return false, otherwise continue
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object2[key] !== object1[key]) {
        return false;
      }
    }
  }
  return true;
};

/* const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false); */

module.exports = eqObjects;