import { wordCount } from "./wordCount"
import { characterCount } from "./characterCount"
import { lineCount } from "./lineCount"
import { longestWordLength } from "./longestWordLength"
import { mostCommonLetter } from "./mostCommonLetter"

export const stringAnalyzer = (text: string) => {
  return {
    wordCount: wordCount(text),
    characterCount: characterCount(text),
    lineCount: lineCount(text),
    longestWordLength: longestWordLength(text),
    mostCommonLetter: mostCommonLetter(text)
  }
}