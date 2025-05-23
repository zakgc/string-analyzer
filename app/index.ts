import { validateRequestBody } from './services/validateRequestBody'
import { stringAnalyzer } from './services/stringAnalyzer'

export const handler = async (event: any) => {
  const requestBody = JSON.parse(event.body)
  let validRequestBody = validateRequestBody(requestBody)

  if (validRequestBody === 400) {
    return {
      statusCode: 400
    }
  }

  let stringAnalysis = stringAnalyzer(requestBody.text)
  return {
    statusCode: 200,
    body: JSON.stringify(stringAnalysis)
  };
};
