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

.frame-wrapper {
  width: 90%;
  min-width: 98rem;
  max-width: 150rem;
  margin: 0 auto;
  display: table;
  table-layout: fixed;

  &:after {
    content: '';
    width: 100%;
    display: block;
    clear: both;
  }
}

.frame-content {
  padding: 6.5rem 0 0;
  width: 100%;

  .block-main {
    display: table-cell;
    vertical-align: top;
    width:100%;
  }
}
</style>
