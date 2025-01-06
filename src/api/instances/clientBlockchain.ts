import { RPC_CONFIG } from '@/constant/rpcConfigg'

import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const clientBlockchain: AxiosInstance = axios.create({
  baseURL: RPC_CONFIG,
  timeout: 1000 * 60 * 60 * 2 // 2 hours
})

clientBlockchain.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    //config...
    return Promise.resolve(config)
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

clientBlockchain.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError<any>) => {
    return Promise.reject(error)
  }
)
export default clientBlockchain
