let args = process.argv;
for (let i = 2; i < args.length; i++) {
  let result = '';
  result = args[i].slice(1) + args[i][0] + 'ay';
  console.log(result);
}