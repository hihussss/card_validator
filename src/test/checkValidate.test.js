import { checkValidate } from "../class/checkValidate";
import { expect } from '@jest/globals';

const valid = new checkValidate();



test('Valid_true', () => {
    expect(valid.validCard("4111111111111111")).toBe(true);
})



test('Valid_false', () => {
    
    expect(valid.validCard("1234567890123456")).toBe(false);
})

test.each([
    ["4111111111111111",  "Visa"],
    ["371449635398431",  "AmericanExpress"],
    ["30569309025904", "DinersClub"],
    ["60111111111111117", "Discover"],
    ["3530111333300000", "JCB"],
    ["5555555555554444", "Mastercard"],
    ["2201382000000021", "Mir"],
  ])('testing number (%s)', (number, expected) => {
    const result1 = valid.firmaCard(number)
    expect(result1).toBe(expected);
  });