import { json } from "react-router-dom";
import toast from "react-hot-toast";
import { API_BASE_URL as defaultUrl } from "../utils/constants";

async function useFetch(request) {
  const { url, method, body, token } = request;

  const options = {
    method: method || "GET", // default to 'GET' if method is not provided
    headers: {
      Authorization: "Bearer " + token,
    },
    body: body,
  };

  if (!request.multipart && body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  const responseFromServer = await fetch(defaultUrl + url, options);
  const jsonResponse = await responseFromServer.json();
  if (!responseFromServer.ok) {
    toast.error(jsonResponse?.message);
    return null
  }

  return jsonResponse;
}

export default useFetch;

// .then(response => {
//   response.json()
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//     // toast.error(response.statusText)
//   }
//   return response.json();
// })
// .catch(error => {
//   console.error('There was a problem with the fetch operation:', error?.message);
// });
