const eqObjects = (obj1, obj2) => {
  if (obj1 === obj2) {
    return true;
  }
  if (obj1 === null || obj2 === null || typeof(obj1) !== 'object' || typeof(obj2) !== 'object') {
    return false;
  }
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }

  for (let key of key1) {
    if ((!key2.includes(key)) || !eqObjects(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
};


console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); 

