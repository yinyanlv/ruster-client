<template>
  <aside class="block-aside" id="app-aside">

    <div class="panel">
      <div class="panel-header">
        <h4>话题推荐</h4>
      </div>
      <div class="panel-content">
        <ul v-if="newBest.length > 0" class="info-list limit-text">
          <li><a href="todo">todo</a></li>
        </ul>
        <div v-if="newBest.length === 0"  class="no-data">暂无推荐的话题</div>
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
          <li>帖子数: n 个</li>
          <li>回帖数: n 条</li>
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
    fetch(config.urlPrefix + '/api/home/bestperson', {
      method: 'GET',
      mode: 'cors'
    }).then(res => res.json())
      .then(data => {
        this.newBest = data.new_best
        this.allBest = data.all_best
      })
      .catch((err) => {
        console.log(err)
      })
  },
  data: function () {
    return {
      newBest: [],
      allBest: []
    }
  }
}
</script>
<style lang="scss">
@import "../assets/styles/scss/sdk/index";

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
</style>
