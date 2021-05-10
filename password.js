let args = process.argv[2];

const replaceA = str => str.replace(/a/gi, 4);
const replaceE = str => str.replace(/e/gi, 3);
const replaceO = str => str.replace(/o/gi, 0);
const replaceL = str => str.replace(/l/gi, 1);

console.log(replaceO(replaceL(replaceE(replaceA(args)))))

