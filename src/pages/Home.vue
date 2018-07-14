<template>
  <div id="page-home">
    <div class="block-main">
      <div class="panel">
        <div class="panel-header">
          <div class="tabs">
            <a href="/topics/all">全部</a>
            <a href="/topics/best">最美</a>
            <a href="/topics/blog">博客</a>
            <a href="/topics/faq">问答</a>
            <a href="/topics/share">分享</a>
            <a href="/topics/job">招聘</a>
            <a href="/topics/web">Web</a>
            <a href="/topics/wasm">Wasm</a>
            <a href="/topics/iot">IOT</a>
            <a href="/topics/no-reply">未回复</a>
          </div>
        </div>
        <div class="panel-content">
          <div class="topic">
            <div class="avatar">
              <a href="/user/admin"><img src="/static/images/avatar.jpg"></a>
            </div>
            <div class="info">
              <dl>
                <dt>
                  <span class="tag tag-category">招聘</span>
                  <a href="/topic/901561008e02eaa70f0f12e4e3afa670">您尚未开通安全预警</a>
                </dt>
                <dd>
                  <span class="item"><a href="/user/admin">admin</a>
                  发布于 <span class="datetime-ago">5 个月前</span></span>
                  <span class="item">• <i class="reply-count">1</i> 个回复</span>
                  <span class="item">• <i class="view-count">42</i> 次浏览</span>

                  <!-- TODO 最后一个回复该问题的人 -->
                  <span class="item right">最后由 <a href="/static/images/avatar.jpg">
                    <img src="/static/images/avatar.jpg"> username</a> 回复于
                    <span class="datetime-ago">5 个月前</span>
                  </span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="panel-footer">
          <div class="pagination">
            <a class="first disabled" href="/topics/job?page=1">«</a>
            <a href="/topics/job?page=1" class="active disabled">1</a>
            <a class="last disabled" href="/topics/job?page=1">»</a>
          </div>
        </div>
      </div>
    </div>
    <app-aside></app-aside>
  </div>
</template>
<script>
import config from '../config'
import Aside from '../components/Aside'

export default {
  name: 'page-home',
  components: {
    'app-aside': Aside
  },
  mounted: function () {
    let data = { page_id: 1}
    fetch(config.urlPrefix + '/api/theme_list/page_id',{
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      mode: 'cors'
    }).then(response => response.json())
      .then(json => {
        this.page_count = json.theme_page_count
        this.half_count = Math.ceil(json.theme_page_count/2)
        this.theme_list = json.theme_list
        this.categorys = json.categorys
      })
      .catch((e) => {
        console.log(e)
      })

    fetch(config.urlPrefix + "/api/home/bestperson",{
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json())
      .then(json => {
        // this.theme_list = json.theme_list
        // this.page_count = json.theme_page_count
        // this.half_count = Math.ceil(json.theme_page_count/2)
        // this.categorys = json.categorys
        this.new_best = json.new_best
        this.all_best = json.all_best
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>
