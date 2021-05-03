// const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');
const assert = require('chai').assert;


describe('#middle', () => {
  it("should return [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  
  it("should return [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
  
  it("should return [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  }); 
  
  it("should return [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  
});


/* assertEqual(eqArrays(middle([1]), []), true);
assertEqual(eqArrays(middle([1, 2]), []), true);
assertEqual(eqArrays(middle([1, 2, 3]), [2]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true); */