import { describe, expect, test } from "vitest";
import { mostCommonLetter } from "./mostCommonLetter";

describe('mostCommonLetter', () => {
  test('returns the most common letter in the string', () => {
    const text = 'This is a test string with lots and lots of letters'

    expect(mostCommonLetter(text)).toBe('t')
  })
})