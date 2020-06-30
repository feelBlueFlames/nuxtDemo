<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: flames
 * @Date: 2020-06-13 18:13:12
 * @LastEditors: flames
 * @LastEditTime: 2020-06-13 22:02:22
-->
<template>
  <div id="" class="">
    <p>{{ $route.params.id }}</p>
    <template>
      <div>
        <a-button type="primary" @click="goBack">
          goBack
        </a-button>
      </div>
    </template>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped></style>
