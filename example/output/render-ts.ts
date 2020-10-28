/*! THIS FILE IS AUTO-GENERATED */

import axios from './axios'

// General
import General from './general'

// Data Dragon
import DDragon from './ddragon'

// APIs

import Foo from './apis/foo'

import Bar from './apis/bar'

import Baz from './apis/baz'

export const riot = {
  setAuth(auth: any) {
    axios.defaults.headers.common['X-Riot-Token'] = auth
  },
  setAxiosRequestInterceptor(onFulfilled: any, onRejected: any) {
    axios.interceptors.request.use(onFulfilled, onRejected)
  },
  setAxiosResponseInterceptor(onFulfilled: any, onRejected: any) {
    axios.interceptors.response.use(onFulfilled, onRejected)
  },
  General,
  DDragon,
  API: {
    Foo,
    Bar,
    Baz,
  },
}
