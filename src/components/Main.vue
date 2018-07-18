<template>
  <section class="frame-content" id="app-main">
    <div class="frame-wrapper">
      <!-- 手机端搜索框 -->
      <div class="m-search">
        <form class="search" method="get" action="">
          <input class="input-search" type="search" name="keyword" placeholder="请输入关键字" value="">
          <a class="btn btn-search" href="javascript:;"><i class="fa fa-search"></i></a>
        </form>
      </div>
      <slot></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: 'app-main'
}
</script>
<style lang="scss">
@import "../assets/styles/scss/sdk/index";

</style>
