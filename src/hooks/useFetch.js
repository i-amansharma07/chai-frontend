import {API_BASE_URL as defaultUrl} from '../utils/constants'

function useFetch(request) {
    const { url, method, body, token } = request;
  
    const options = {
      method: method || 'GET', // default to 'GET' if method is not provided
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
      },
      body: body ? JSON.stringify(body) : undefined,
    };
  
    return fetch(defaultUrl+url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error?.message);
      });
  }
  
export default useFetch;

