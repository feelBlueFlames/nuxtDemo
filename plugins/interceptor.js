/*
 * @Description:
 * @Version: 2.0
 * @Autor: flames
 * @Date: 2020-06-13 23:53:23
 * @LastEditors: flames
 * @LastEditTime: 2020-06-13 23:57:52
 */
export default function({ $axios, store }) {
  $axios.onRequest(config => {
    const token = store.state.user.token;
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  });
}
