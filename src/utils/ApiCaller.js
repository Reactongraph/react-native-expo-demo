import fetch from 'cross-fetch';

const headerData = {
  Authorization: '563492ad6f917000010000019816641b5ca74e31ae9f5356b455d854',
};

const API_URL = 'https://api.pexels.com/v1';

export default (endpoint, method = 'get') => fetch(`${API_URL}${endpoint}`, {
  headers: headerData,
  method,
})
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    if (response.status === 201) {
      return response.json();
    }

    return response;
  });
