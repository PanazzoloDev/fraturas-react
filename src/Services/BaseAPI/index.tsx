/* eslint-disable react-refresh/only-export-components */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { responseType } from '../../Commons/types';

export const API = axios.create({
  baseURL: 'https://localhost:7282'
});

export const handleError = (error: Error): Promise<Error> => {
  window.Snackbar({
    open: true,
    label: error.message,
    type: 'error',
    duration: 6000
  });
  return Promise.reject(new Error(error.message || 'Erro na requisição.'));
}

export const Authenticate = async (username: string, password: string): Promise<responseType> => {
  return API.
    post(`/login?username=${username}&password=${password}`)
    .then((response: AxiosResponse) => response.data)
    .catch(handleError);
}

export const Post = (url: string, data?: object, config?: AxiosRequestConfig): Promise<responseType | Error> => {
  return API
    .post(url, data, config)
    .then((response: AxiosResponse) => response.data)
    .catch(handleError);
};

export const Get = (url: string, config?: AxiosRequestConfig): Promise<responseType | Error> => {
  return API
    .get(url, config)
    .then((response: AxiosResponse) => response.data)
    .catch(handleError);
}
