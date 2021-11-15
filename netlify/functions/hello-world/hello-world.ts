import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  const { name = 'stranger' } = event.queryStringParameters

  return {
    statusCode: 200,
    header: {"ContentType" : "application/json"},
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  }
}
