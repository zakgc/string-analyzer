export const lineCount = (text: string) => {
  let lineArray = text.split('\n')

  return lineArray.length
}