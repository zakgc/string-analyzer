export const characterCount = (text: string) => {
  let characterArray = text.trim().split('')

  return characterArray.length
}