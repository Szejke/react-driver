import axios from 'axios';

const url = 'https://deviceproject.herokuapp.com/device/';

export function getDevice() {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export function deleteDeviceFromApi({ id }) {
  axios.delete(`${url}${id}`);
}

export function createDeviceFromApi(payload) {
  return axios
    .post(url, payload)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export function updateDeviceFromApi(payload, id) {
  return axios
    .put(`${url}${id}`, payload)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
