import { wordCount } from "./wordCount"
import { characterCount } from "./characterCount"
import { longestWordLength } from "./longestWordLength"

export const stringAnalyzer = (text: string) => {
  return {
    wordCount: wordCount(text),
    characterCount: characterCount(text),
    lineCount: 0,
    longestWordLength: longestWordLength(text),
    mostCommonLetter: 0
  }
}