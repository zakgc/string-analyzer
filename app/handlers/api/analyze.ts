import { stringAnalyzer } from "../../services/stringAnalyzer"
import { validateRequestBody } from "../../services/validateRequestBody"

export const handler = async (event: any) => {
  let validatedRequestBody = validateRequestBody(event)

  if (validatedRequestBody === 400) {
    return {
      statusCode: validatedRequestBody
    }
  } else {
    return {
      message: stringAnalyzer(validatedRequestBody as string)
    }
  }
}