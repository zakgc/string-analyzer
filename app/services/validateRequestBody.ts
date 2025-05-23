import { characterCount } from "./characterCount"

export const validateRequestBody = (body: any) => {
  if (isInvalidJSON(body)) {
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
    JSON.parse(body)
  } catch (error) {
    return true
  }

  return false
}