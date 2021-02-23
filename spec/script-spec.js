const { JamBuddy } = require("../src/script");
let buddy = new JamBuddy();
describe("selectNotes()", function () {
  let firstSet;
  let secondSet;
  let notes = buddy.selectNotes();

  beforeEach(function () {
    firstSet = buddy.selectNotes();
    secondSet = buddy.selectNotes();
  });
  it("should return random notes", function () {
    expect(firstSet).not.toEqual(secondSet);
  });
  it("should print array of two notes ", function () {
    expect(notes.length).toEqual(2);
  });
});
describe("checkAnswer()", function () {
  beforeEach(function () {
    buddy.outputArr = ["A", "D"];
  });
  it("should return true", function () {
    expect(buddy.checkAnswer(5)).toBe(true);
  });
  it("should return false", function () {
    expect(buddy.checkAnswer(6)).toBe(false);
  });
});

describe("checkAnswer()", function () {
  beforeEach(function () {
    buddy.outputArr = ["D", "A"];
  });
  it("should return true", function () {
    expect(buddy.checkAnswer(7)).toBe(true);
  });
});
