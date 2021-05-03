let args = process.argv;
for (let i = 2; i < args.length; i++) {
  let result = '';
  for (let j = args[i].length - 1; j >= 0; j--) {
    result += args[i][j];
  }
  console.log(result);
}
