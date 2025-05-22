import { describe, expect, test } from "vitest";
import { mostCommonLetter } from "./mostCommonLetter";

describe('mostCommonLetter', () => {
  test('returns the amount of words in string', () => {
    const text = 'This is a test string with lots and lots of letters'

    expect(mostCommonLetter(text)).toBe('t')
  })
})