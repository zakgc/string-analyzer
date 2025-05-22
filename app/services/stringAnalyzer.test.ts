import { describe, expect, it, test } from "vitest";
import { stringAnalyzer } from "./stringAnalyzer";

describe('stringAnalyzer', () => {
  test('returns all the analysis of a string', () => {
    const text = 'This is a test string'
    let analysis = stringAnalyzer(text)

    expect(analysis.wordCount).toBe(5)
    expect(analysis.characterCount).toBe(17)
    expect(analysis.lineCount).toBe(0)
    expect(analysis.longestWordLength).toBe(0)
    expect(analysis.mostCommonLetter).toBe(0)
  })
})