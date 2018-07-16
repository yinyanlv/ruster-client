<template>
  <div>
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
          <div v-for="(topic, index) in topicList" :key="index" class="topic">
            <div class="avatar">
              <a href="/user/admin"><img src="/static/images/avatar.jpg"></a>
            </div>
            <div class="info">
              <dl>
                <dt>
                  <span class="tag tag-category">{{topic.category_name_cn}}</span>
                  <a :href="'/topic/' + topic.id">{{topic.title}}</a>
                </dt>
                <dd>
                  <span class="item"><a :href="'/user/' + topic.user_id">{{topic.username}}</a>
                  发布于 <span class="datetime-ago">{{topic.rtime}}</span></span>
                  <span class="item">• <i class="reply-count">{{topic.comment_count}}</i> 个回复</span>
                  <span class="item">• <i class="view-count">{{topic.view_count}}</i> 次浏览</span>

                  <!-- TODO 最后一个回复该问题的人 -->
                  <span class="item right">最后由 <a href="/static/images/avatar.jpg">
                    <img src="/static/images/avatar.jpg"> username</a> 回复于
                    <span class="datetime-ago">5 个月前</span>
                  </span>
                </dd>
              </dl>
            </div>
          </div>

          <div v-if="topicList.length === 0" class="no-data">
            暂无数据
          </div>
        </div>
        <div class="panel-footer">
          <app-pagination :current-page="this.currentPage"></app-pagination>
        </div>
      </div>
    </div>
    <app-aside></app-aside>
  </div>
</template>
<script>
import config from '../config'
import Aside from '../components/Aside'
import Pagination from '../components/Pagination'

export default {
  name: 'page-home',
  components: {
    'app-aside': Aside,
    'app-pagination': Pagination
  },
  mounted: function () {
    let data = {page_id: this.currentPage}
    fetch(config.urlPrefix + '/api/theme_list/page_id', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => {
        this.topicList = data.theme_list
        this.categories = data.categorys
      })
      .catch((err) => {
        console.log(err)
      })
  },
  data: function () {
    return {
      currentPage: 1,
      topicList: []
    }
  }
}
</script>
