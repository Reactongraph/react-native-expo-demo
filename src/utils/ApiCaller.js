import fetch from 'cross-fetch';

const { Promise } = require('es6-promise');

const headerData = {
  Authorization: '563492ad6f917000010000019816641b5ca74e31ae9f5356b455d854',
};

const API_URL = 'https://api.pexels.com/v1';

export default (endpoint, method = 'get') => fetch(`${API_URL}${endpoint}`, {
  headers: headerData,
  method,
})
  .then((response) => {
    console.log('response', response);
    return response;
  })
  .then(({ json, response }) => {
    console.log('>>>>>>>>>>>', response, json);
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  })
  .then(response => response, error => error);
