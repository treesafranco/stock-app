import axios from 'axios';

export async function client(endpoint) {
  let data;
  try {
    const response = await axios.get(endpoint);
    data = await response.data;
    return data;
  } catch (err) {
    return Promise.reject(err.message ? err.message : 'error');
  }
}

client.get = function (endpoint) {
  return client(endpoint);
};
