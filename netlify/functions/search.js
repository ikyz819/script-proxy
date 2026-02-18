export async function handler(event) {
  const query = event.queryStringParameters.q;

  try {
    const response = await fetch(
      `https://scriptblox.com/api/script/search?q=${query}`
    );

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" })
    };
  }
  }
