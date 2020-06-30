<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: flames
 * @Date: 2020-06-13 16:33:56
 * @LastEditors: flames
 * @LastEditTime: 2020-06-14 01:17:50
-->
<template>
  <div id="" class="">
    <p>商品列表</p>
    <ul>
      <li v-for="good in goods" :key="good.id">
        <nuxt-link :to="`/goodsDetail/${good.id}`">{{ good.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  //   middleware: ["auth"],
  props: {},
  async asyncData({ $axios, error }) {
    try {
      const { code, goods } = await $axios.$get("/api/goods");
      if (code === 1) {
        return { goods };
      }
      error({ code: 0, msg: "未查询到数据" });
    } catch (error) {
      error(error);
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
