function makeIdGenerator() {
  let id = 0;

  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  }
}

// makeIdGenerator returns a function which is assigned to
// the variable nextId
const nextId = makeIdGenerator();

const rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}



console.log(rollDie());  // 1 (for example)

console.log(nextId()); // Logs: 1
console.log(nextId()); // Logs: 2


function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let index = -1;

  return function() {
    /* your code here */
    index += 1
    return list[index];
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6 

