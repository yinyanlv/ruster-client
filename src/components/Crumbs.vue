<template>
  <div class="crumbs" id="app-crumbs">
    <a href="/">首页</a>
    <span class="divider">/</span>
    <span class="current">{{text}}</span>
  </div>
</template>
<script>
export default {
  name: 'app-crumbs',
  props: {
    text: {
      required: true
    }
  }
}
</script>
<style lang="scss">
@import "../assets/styles/scss/sdk/index";

.crumbs {
  padding: 1rem;
  color: $lightest-font-color;
  font-size: 0;
  line-height: 2rem;
  height: 4rem;

  a {
    font-size: 1.4rem;
    color: $theme-color;

    &:hover {
      text-decoration: underline;
    }
  }

  .divider {
    font-size: 1.4rem;
    padding: 0 .5rem;
  }

  .current {
    font-size: 1.4rem;
  }
}
</style>
