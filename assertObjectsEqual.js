const eqArrays = function(array1, array2) {
  if (array2.length !== array1.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }  return true;
};

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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

const obj1 = {studentName : "Zio",
birthDate : "march 24, 2020",
age : 23,
scores : [1, 3, 4]
};

const obj2 = {studentName : "Zio",
birthDate : "march 24, 2020",
age : 23,
scores : [1, 3, 4]
};

const obj3 = {studentName : "Zio",
birthDate : "march 24, 2020",
age : 223,
scores : [1, 3, 4]
};


assertObjectsEqual(obj1, obj2)
assertObjectsEqual(obj1, obj3)

