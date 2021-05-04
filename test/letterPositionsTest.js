const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letter positions", () => {
  it("should return [1]", () => {
    assert.deepEqual(letterPositions("hello").e, [1])
  })
})
