import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const clientMediaUpload: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MEDIA_UPLOAD_URL,
  timeout: 1000 * 60 * 60 * 2 // 2 hours
})

clientMediaUpload.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    //config...
    return Promise.resolve(config)
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

clientMediaUpload.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError<any>) => {
    return Promise.reject(error)
  }
)
export default clientMediaUpload
