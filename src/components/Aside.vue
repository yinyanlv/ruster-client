<template>
  <aside class="block-aside" id="app-aside">

    <div class="panel">
      <div class="panel-header">
        <h4>话题推荐</h4>
      </div>
      <div class="panel-content">
        <ul class="info-list limit-text">
          <li><a href="todo">todo</a></li>
        </ul>
        <div class="no-data">暂无其它话题</div>
      </div>
    </div>

    <div class="panel friendly-link">
      <div class="panel-header">
        <h4>友情社区</h4>
      </div>
      <div class="panel-content">
        <ul class="info-list">
          <li>
            <a href="https://ruby-china.org" rel="nofollow" target="_blank">
              <img src="/images/friendly/ruby.png">
            </a>
          </li>
          <li>
            <a href="https://cnodejs.org" rel="nofollow" target="_blank">
              <img src="/images/friendly/cnode.png">
            </a>
          </li>
          <li>
            <a href="https://gocn.io" rel="nofollow" target="_blank">
              <img src="/images/friendly/gocn.png">
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
          <li>社区会员: todo 人</li>
          <li>帖子数: todo 个</li>
          <li>回帖数: todo 条</li>
        </ul>
      </div>
    </div>

  </aside>
</template>
<script>
export default {
  name: 'app-aside'
}
</script>
<style lang="scss">
@import "../assets/styles/scss/sdk/index";

.friendly-link {
  .info-list {
    li {
      text-align: center;
    }
  }
}
</style>
