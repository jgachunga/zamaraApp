import axios from 'axios';
import { Apis } from '../constants';
import { authHeader } from '../helpers/authHelper';

export const axiosAuthApi = axios.create({
  baseURL: Apis.AUTH_URL,
  timeout: 1000,
  headers: {},
});

export const axiosApi = axios.create({
  baseURL: Apis.BASE_URL,
  timeout: 1000,
  headers: {},
});

axiosApi.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  
  return Promise.reject(error);
});

export async function get(url, config = {}) {
  return await axiosApi.get(url, { params: config, headers: await authHeader()}).then(response => response);
}
  
export async function patch(url, data, config = {}) {
  return await axiosApi.patch(url, { ...data }, { ...config, headers: await authHeader() })
    .then(response => response)
    .catch(error => error.response);
}
  
export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config, headers: await authHeader() })
    .then(response => response);
    
}
  
export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config, headers: await authHeader() })
    .then(response => response);
}
  
export async function del(url, config = {}) {
  return await axiosApi
    // eslint-disable-next-line no-undef
    .delete(url, { ...config, headers: await authHeader() })
    .then(response => response);
}