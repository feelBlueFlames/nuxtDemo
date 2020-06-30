/*
 * @Description:
 * @Version: 2.0
 * @Autor: flames
 * @Date: 2020-06-13 23:09:41
 * @LastEditors: flames
 * @LastEditTime: 2020-06-13 23:23:14
 */
export const state = () => ({
  token: ""
});
export const mutations = {
  setToken(state, token) {
    state.token = token;
  }
};
export const actions = {
  login({ commit }, user) {
    return this.$axios.$post("/api/login", user).then(res => {
      const { code, token } = res;
      if (code === 1) commit("setToken", token);
      return res;
    });
  }
};
