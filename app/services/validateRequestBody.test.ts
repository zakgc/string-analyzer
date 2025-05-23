import { describe, expect, test } from "vitest";
import { validateRequestBody } from "./validateRequestBody";

describe('validateRequestBody', () => {
  test('returns 400 if requestBody is invalid JSON', () => {
    let requestBody = {
      array: [ 16, 23, ]
    }

    expect(validateRequestBody(requestBody)).toBe(400)
  })

  test('returns 400 if requestBody does not have text', () => {
    let requestBody = {
      notText: 'text'
    }

    expect(validateRequestBody(requestBody)).toBe(400)
  })

  test('returns 400 if character count is less than 5', () => {
    let text = 'Tiny'
    let requestBody = {
      text: text
    }

    expect(validateRequestBody(requestBody)).toBe(400)
  })

  test('returns 400 if character count is greater than 300', () => {
    let text = 'forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari forza ferrari '
    let requestBody = {
      text: text
    }

    expect(validateRequestBody(requestBody)).toBe(400)
  })

  test('returns the value of text if it is valid', () => {
    let text = 'This is the goldilocks text'
    let requestBody = {
      text: text
    }

    expect(validateRequestBody(requestBody)).toBe(text)
  })
})