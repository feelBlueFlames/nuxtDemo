/*
 * @Description:
 * @Version: 2.0
 * @Autor: flames
 * @Date: 2020-06-13 23:07:54
 * @LastEditors: flames
 * @LastEditTime: 2020-06-14 00:00:36
 */
export default function({ route, store, redirect }) {
  if (!store.state.user.token) {
    redirect("/login?redirect=" + route.path);
  }
}
