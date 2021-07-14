import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import {BASE} from './backendRoutes'

export const axiosCall = ({method, url, params, data }: AxiosRequestConfig): AxiosPromise =>
  axios({
    method,
    baseURL: `${BASE}`,
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    params,
  });
