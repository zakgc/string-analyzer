import { characterCount } from "./characterCount"

export const validateRequestBody = (body: any) => {
  let textCharacterCount = characterCount(body.text)

  if (textCharacterCount < 5 || textCharacterCount > 300) {
    return 400
  }

  return body.text
}