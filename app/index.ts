export const handler = async (event: any) => {
  const body = JSON.parse(event.body)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Fresh start because of Gremlins", body: body})
  };
};
