<template>
  <aside class="block-aside" id="app-aside">

    <div class="panel">
      <div class="panel-header">
        <h4>话题推荐</h4>
      </div>
      <div class="panel-content">
        <!-- TODO -->
        <!--<ul class="info-list limit-text">-->
          <!--<li><a href="#">title</a></li>-->
        <!--</ul>-->
        <div class="no-data">暂无推荐的话题</div>
      </div>
    </div>

    <div class="panel friendly-link">
      <div class="panel-header">
        <h4>友情社区</h4>
      </div>
      <div class="panel-content">
        <ul class="info-list">
          <li>
            <a class="text" href="https://rust.cc" rel="nofollow" target="_blank">
              rust.cc
            </a>
          </li>
          <li>
            <a href="https://ruby-china.org" rel="nofollow" target="_blank">
              <img src="/static/images/ruby.png">
            </a>
          </li>
          <li>
            <a href="https://cnodejs.org" rel="nofollow" target="_blank">
              <img src="/static/images/cnode.png">
            </a>
          </li>
          <li>
            <a href="https://gocn.io" rel="nofollow" target="_blank">
              <img src="/static/images/gocn.png">
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header">
        <h4>统计信息</h4>
      </div>
      <div class="panel-content">
        <ul class="info-list">
          <li>社区会员: n 人</li>
          <li>话题: n 个</li>
          <li>博客: n 条</li>
          <li>评论: n 条</li>
          <li>收藏: n 条</li>
        </ul>
      </div>
    </div>

  </aside>
</template>
<script>
import config from '../config'
export default {
  name: 'app-aside',
  mounted: function () {
    this.loadSiteInfo()
  },
  data: function () {
    return {
      newBest: [],
      siteInfo: []
    }
  },
  methods: {
    loadSiteInfo: function () {
      fetch(config.urlPrefix + '/api/ruster/info', {
        method: 'GET'
      }).then(res => res.json())
        .then(data => {

        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="scss">
@import "../assets/styles/scss/sdk/index";

.block-aside {
  display: table-cell;
  width: 30.5rem;
  min-width: 30.5rem;
  padding-left: 1.5rem;
  vertical-align: top;
}

.friendly-link {
  .info-list {
    li {
      text-align: center;
    }

    .text{
      font-size:22px;
      font-weight: bold;
    }
  }
}

@include mobile() {
  .block-aside {
    display: block;
    width: 100%;
    min-width: 100%;
    padding-left: 0;
  }
}
</style>
