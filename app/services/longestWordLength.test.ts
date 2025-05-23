import { describe, expect, test } from "vitest";
import { longestWordLength } from "./longestWordLength";

describe('longestWordLength', () => {
  test('returns the length of the longest word in string', () => {
    const text = 'This is a test string'

    expect(longestWordLength(text)).toBe(6)
  })
})