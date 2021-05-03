let args = process.argv[2];
/* args = args.replace(/a/gi, 4);
args = args.replace(/e/gi, 3);
args = args.replace(/o/gi, 0);
args = args.replace(/l/gi, 1); */
args = args.replace(/a/gi, 4).replace(/e/gi, 3).replace(/o/gi, 0).replace(/l/gi, 1)
console.log(args)