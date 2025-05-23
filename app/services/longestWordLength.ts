export const longestWordLength = (text: string) => {
  let wordArray = text.split(' ')
  wordArray.sort((a, b) => b.length - a.length)

  return wordArray[0].length
}