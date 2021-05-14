const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let index in arr1) {
    if (Array.isArray(arr1[index]) && Array.isArray(arr2[index])) {
      if (!eqArrays(arr1[index], arr2[index])) {
        return false;
      }
    } else if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]));