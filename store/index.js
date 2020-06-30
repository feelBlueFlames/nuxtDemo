/*
 * @Description:
 * @Version: 2.0
 * @Autor: flames
 * @Date: 2020-06-13 23:45:02
 * @LastEditors: flames
 * @LastEditTime: 2020-06-13 23:48:43
 */
export const actions = {
  nuxtServerInit({ commit }, { app }) {
    const token = app.$cookies.get("token");
    if (token) commit("user/setToken", token);
  }
};
