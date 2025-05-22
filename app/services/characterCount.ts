export const characterCount = (text: string) => {
  let characterArray = text.replace(/ /g,'').split('')

  return characterArray.length
}