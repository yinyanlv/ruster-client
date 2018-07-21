<template>
  <footer class="frame-footer">
    <div class="frame-wrapper">
      <div class="links">
        <router-link :to="{path: '/about'}">关于本站</router-link>
        <a href="https://github.com/ruster-xyz/ruster.git" target="_blank" rel="nofollow">本站源码地址</a>
      </div>
      <div class="site-info">Ruster，一个 Rust 语言的中文社区，致力于 Rust 的技术研究与发展。</div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter'
}
</script>
<style lang="scss">
@import "../assets/styles/scss/sdk/index";

.frame-footer {
  width: 100%;
  padding: 1.5rem 0;
  background: #fff;
  @include boxShadow(0 -.1rem .1rem $box-shadow-color);

  .links {
    width: 100%;
    font-size: 0;
    padding: .4rem 0;

    a {
      padding: 0 .5rem;
      font-size: 1.3rem;
      line-height: 1.8rem;
      color: $font-color;
      border-left: .1rem solid $bd-color;

      &:hover {
        color: $theme-color;
        text-decoration: underline;
      }

      &:first-child {
        border-left: 0;
        padding-left: 0;
      }
    }
  }

  .site-info {
    color: $lightest-font-color;
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
}

@include mobile() {

  .frame-footer {
    padding: 1.5rem 1rem;
  }
}
</style>
