// 引入axios的类型定义
import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

// 定义一个新的接口，它包含四个可选的方法，用于在请求和响应时进行拦截处理。
// 这四个方法分别对应请求成功，请求失败，响应成功和响应失败的情况。
// 他们的参数和返回值分别是请求配置对象，错误对象，响应对象和错误对象。
export interface HYInterceptors<T = AxiosResponse> {
  //请求成功拦截
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  //请求失败拦截
  requestFailureFn?: (err: any) => any
  //响应成功拦截
  responseSuccessFn?: (res: T) => T
  //响应失败拦截
  responseFailureFn?: (err: any) => any
}

// 定义一个新的接口，它继承自axios的AxiosRequestConfig接口，并额外添加一个interceptors属性。
// interceptors属性的类型是上面定义的HYInterceptors接口，用于在axios请求中添加自定义的拦截器，在原本的AxiosRequestConfig的基础上通过继承继续去添加拦截器的部分。同时通过这个将泛型T传递了进来到HYInterceptors中进行使用，不然是无法直接传入HYInterceptors的
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYInterceptors<T>
}
