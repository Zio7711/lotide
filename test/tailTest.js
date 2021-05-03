const assertEqual = require('../assertEqual');
const tail = require('../tail.js');

const words = ["Yo Yo", "Lighthouse", "Labs"];

let result = tail(words); 
assertEqual(result.length, 2); 
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
