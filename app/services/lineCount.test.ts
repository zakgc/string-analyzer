import { describe, expect, test } from "vitest";
import { lineCount } from "./lineCount";

describe('lineCount', () => {
  test('returns the amount of lines in string', () => {
    const text = 'This is a test string\nbut it has lots lines\ntoo many lines'

    expect(lineCount(text)).toBe(3)
  })
})