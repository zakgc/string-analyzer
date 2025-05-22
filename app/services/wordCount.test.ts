import { describe, expect, test } from "vitest";
import { wordCount } from "./wordCount";

describe('wordCount', () => {
  test('returns the amount of words in string', () => {
    const text = 'This is a test string'

    expect(wordCount(text)).toBe(5)
  })
})