exports.handler = async (event) => {
  const message = "Hello World! from the handler folder";
  console.log(`Returning ${message}`);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message
    })
  }
}