import { CommonLetter } from "../types"

export const mostCommonLetter = (text: string) => {
  let characterArray = text.replace(/ /g,'').toLowerCase().split('')

  let commonLetters: CommonLetter[] = []

  characterArray.map((character) => {
    let index = commonLetters.findIndex((letter) => letter.letter === character)

    if (index === -1) {
      commonLetters.push({
        letter: character,
        count: 1
      })
    } else {
      commonLetters[index].count = commonLetters[index].count + 1
    }
  })

  commonLetters.sort((a, b) => b.count - a.count)

  return commonLetters[0].letter
}