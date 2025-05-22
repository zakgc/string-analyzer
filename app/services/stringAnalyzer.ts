import { wordCount } from "./wordCount"

export const stringAnalyzer = (text: string) => {
  return {
    wordCount: wordCount(text),
    characterCount: 0,
    lineCount: 0,
    longestWordLength: 0,
    mostCommonLetter: 0
  }
}