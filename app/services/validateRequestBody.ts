import { characterCount } from "./characterCount"

export const validateRequestBody = (body: any): string | number => {
  console.log(body)
  console.log(isInvalidJSON(body))
  if (isInvalidJSON(body)) {
    return 400
  }

  console.log(body.hasOwnProperty('text'))

  if(!body.hasOwnProperty('text')) {
    return 400
  }

  let textCharacterCount = characterCount(body.text)

  if (textCharacterCount < 5 || textCharacterCount > 300) {
    return 400
  }

  return body.text
}

const isInvalidJSON = (body: any): boolean => {
  try {
    console.log(JSON.parse(body))
    JSON.parse(body)
    return false
  } catch (error) {
    return true
  }

  return false
}