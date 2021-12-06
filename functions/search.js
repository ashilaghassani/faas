const keyword = require('querystring');

const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { query } = keyword.parse(event.body);
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}`,
    {
      method: 'GET',
      headers: {
        Authorization: "Client-ID QIjMG3n_vl_qjK6iHpbWnGGq2WKOxYNIHC7h7AKAnCM",
      },
    }
  )
  .then((response) => response.json())

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `<img 
        src="${ response.results[0].urls.regular}"
    />`,
  };
};