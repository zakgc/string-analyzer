import { afterEach, describe, expect, it, test, vi } from "vitest";
import { validateRequestBody } from "../../services/validateRequestBody";
import { handler } from "./analyze";

describe('analyze handler', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return 400', async () => {
    let event = {
      text: 'this'
    }
    const badHandler = vi.fn((number) => Promise.resolve(4400))


    await handler(event)
    expect(badHandler).toHaveResolvedWith(4400)
  })

  test('returns all the analysis of a string', () => {
    const text = 'This is a test string'
    // expect(analysis.wordCount).toBe(5)
    // expect(analysis.characterCount).toBe(17)
    // expect(analysis.lineCount).toBe(1)
    // expect(analysis.longestWordLength).toBe(6)
    // expect(analysis.mostCommonLetter).toBe('t')
  })
})

describe('stringAnalyzer', () => {
  test('returns all the analysis of a string', () => {
    const text = 'This is a test string'
    let analysis = stringAnalyzer(text)

    expect(analysis.wordCount).toBe(5)
    expect(analysis.characterCount).toBe(17)
    expect(analysis.lineCount).toBe(1)
    expect(analysis.longestWordLength).toBe(6)
    expect(analysis.mostCommonLetter).toBe('t')
  })
})