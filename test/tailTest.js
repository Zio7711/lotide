// const assertEqual = require('../assertEqual');
const tail = require('../tail.js');
const assert = require('chai').assert;

describe('#tail testing', () => {
  it("original array ['Yo Yo', 'Lighthouse', 'Labs'], length should be 2", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    let result = tail(words); 
    assert.equal(result.length, 2); 
  });

  it("original array ['Yo Yo', 'Lighthouse', 'Labs'], index 0 should be 'Lighthouse'", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    let result = tail(words); 
    assert.equal(result[0], "Lighthouse");
  });

  it("original array ['Yo Yo', 'Lighthouse', 'Labs'], index 1 should be 'Labs'", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    let result = tail(words); 
    assert.equal(result[1], "Labs");
  });
});


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// let result = tail(words); 
// assertEqual(result.length, 2); 
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");
