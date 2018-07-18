<template>
  <div id="app">
    <router-view />
    <div class="back-to-top" id="back-to-top">
      <span>回到顶部</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "assets/styles/scss/common/reset";
@import "assets/styles/scss/common/frame";
@import "assets/styles/scss/common/mobile";
</style>
