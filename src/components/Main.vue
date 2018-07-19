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

.frame-content {
  padding: 6.5rem 0 0;
  width: 100%;

  .block-main {
    display: table-cell;
    vertical-align: top;
    width: 100%;
  }
}

.m-search {
  display: none;

  .search {
    height: 5rem;
    padding: 1rem 1.5rem 1rem 1.5rem;
    position: relative;

    input {
      width: 100%;
      padding: .4rem 3rem .4rem .8rem;
    }

    .btn-search {
      position: absolute;
      width: 3rem;
      @include setHeightGroup(3rem);
      right: 1.5rem;
      top: 1rem;
      z-index: 10;
      text-align: center;
      font-size: 1.8rem;
      color: $lightest-font-color;
    }
  }
}

@include mobile() {
  .frame-content {
    padding: 4.5rem 0 0;

    .block-main {
      width: 100%;
      display: block;
    }
  }

  .m-search {
    display: block;
  }
}
</style>
