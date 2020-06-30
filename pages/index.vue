<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: flames
 * @Date: 2020-06-13 16:08:49
 * @LastEditors: flames
 * @LastEditTime: 2020-06-14 01:51:05
-->
<template>
  <div class="container">
    <nuxt-link to="/goods">去商品列表页</nuxt-link>
    <a-button type="primary" @click="logOut">
      logOut
    </a-button>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    logOut() {
      this.$auth.logout("local").then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
