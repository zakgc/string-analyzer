import { wordCount } from "./wordCount"
import { characterCount } from "./characterCount"

export const stringAnalyzer = (text: string) => {
  return {
    wordCount: wordCount(text),
    characterCount: characterCount(text),
    lineCount: 0,
    longestWordLength: 0,
    mostCommonLetter: 0
  }
}