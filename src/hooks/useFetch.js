import toast from "react-hot-toast";
import { API_BASE_URL as defaultUrl } from "../utils/constants";
import useAuth from "./useAuth";

async function useFetch(request) {
  const { url, method, body} = request;
  const token = localStorage.getItem('accessToken')

  const options = {
    method: method || "GET", // default to 'GET' if method is not provided
    headers: {
      Authorization: "Bearer " + token,
    },
    body: body,
  };

  try {
    if (!request.multipart && body) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    }
    const responseFromServer = await fetch(defaultUrl + url, options);
    const jsonResponse = await responseFromServer.json();
    if (!responseFromServer.ok) {
      if(jsonResponse.message !== 'jwt malformed'){
        toast.error(jsonResponse.message)
      }
      return;
    }

    return jsonResponse;
  } catch (error) {
    console.log(error);
    toast.error("Server is not responding");
  }
}

export default useFetch;

