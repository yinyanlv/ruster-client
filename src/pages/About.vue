<template>
  <section>
    <div class="block-main">
      <div class="panel">
        <div class="panel-header">
          <app-crumbs :text="'关于本站'"></app-crumbs>
        </div>
        <div class="panel-content">
          <div class="introduction">
            <h2>关于本站</h2>
            <p>本站希望发展成为一个开放、活跃、健康的Rust社区，致力于 Rust 的技术研究与发展。</p>
            <p>本站完全兼容PC端和移动端，前后端分离。后端：rust、actix-web、diesel、postgre sql，前端：vue  <a href="https://github.com/ruster-xyz/ruster" rel="nofollow" target="_blank">本站源码地址</a>。</p>
            <h2>捐助</h2>
          </div>
        </div>
      </div>
    </div>
    <app-aside></app-aside>
  </section>
</template>
<script>

import Aside from '../components/Aside'
import Crumbs from '../components/Crumbs'

export default {
  name: 'PageAbout',
  components: {
    'app-crumbs': Crumbs,
    'app-aside': Aside
  },
  mounted: function () {
  },
  data: function () {
    return {
    }
  }
}
</script>
<style lang="scss">
@import "../assets/styles/scss/sdk/index";

.introduction {
  padding: 1rem;

  h2 {
    font-size: 2rem;
    line-height: 2.8rem;
    padding: .5rem 0;
    border-bottom: .1rem solid $lighter-bd-color;
    margin: 1rem 0;
  }

  h3 {
    font-size: 1.8rem;
    line-height: 2.8rem;
    padding: .5rem 0;
    border-bottom: .1rem solid $lighter-bd-color;
    margin: 1rem 0;
  }

  p {
    line-height: 2rem;
    font-size: 1.4rem;
    padding: 1rem 0;
  }

  a {
    color: $theme-color;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
