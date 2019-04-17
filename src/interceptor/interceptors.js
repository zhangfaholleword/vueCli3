import axios from 'axios';

//请求拦截器
function useRequestInterceptor(beforeRequestHandler, errorHandler) {
  return axios.interceptors.request.use(beforeRequestHandler, errorHandler);
}

//响应拦截器
function useResponseInterceptor(successHandler, errorHandler) {
  return axios.interceptors.response.use(successHandler, errorHandler);
}

export {
  useRequestInterceptor,
  useResponseInterceptor
}

