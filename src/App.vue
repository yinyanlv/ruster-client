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
@import "assets/styles/scss/sdk/index";
@import "assets/styles/scss/common/reset";
@import "assets/styles/scss/common/frame";
.back-to-top {
  position: fixed;
  display: none;
  right: 0;
  top: 60%;
  width: 2.8rem;
  color: gray;
  cursor: pointer;
  text-align: center;
  z-index: 20;
  line-height: 2rem;
  background-color: #fff;
  padding: 1.2rem 0 1.2rem .5rem;
  border-radius: 1.2rem 0 0 1.2rem;
  @include boxShadow(0 0 .3rem $box-shadow-color);

  span{
    display: inline-block;
    width:1.6rem;
  }
}

</style>
