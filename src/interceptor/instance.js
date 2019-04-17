import {useRequestInterceptor, useResponseInterceptor} from './interceptors'

//请求拦截器
useRequestInterceptor(
  req => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return req;
  },
  err => {
    return Promise.reject(err);
  }
)

//响应拦截器
useResponseInterceptor(
  res => {
    return res;
  },
  err => {
    if (err.response) {
      switch (err.response.status) {
        case 401:
        // 返回 401 清除token信息并跳转到登录页面
        // store.commit(types.LOGOUT);
        // router.replace({
        //   path: 'login',
        //   query: {redirect: router.currentRoute.fullPath}
        // })
      }
    }
    return Promise.reject(err.response.data)   // 返回接口返回的错误信息
  }
)
