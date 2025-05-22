import { describe, expect, test } from "vitest";
import { characterCount } from "./characterCount";

describe('characterCount', () => {
  test('returns the amount of characters in string', () => {
    const text = 'This is a test string'

    expect(characterCount(text)).toBe(17)
  })
})