<template>
  <section>
    <div class="block-main">
      <div class="panel">
        <div class="panel-header">
          <div class="tabs">
            <router-link :to="{path: '/topics/' + item.categoryName}" v-for="(item, index) in categories" :key="index">{{item.categoryNameCn}}</router-link>
          </div>
        </div>
        <div class="panel-content">
          <div v-for="(topic, index) in topics" :key="index" class="topic">
            <div class="avatar">
              <router-link :to="{path: '/user/' + topic.username}"><img src="/static/images/avatar.jpg"></router-link>
            </div>
            <div class="info">
              <dl>
                <dt>
                  <span class="tag tag-category">{{topic.categoryNameCn}}</span>
                  <router-link v-if="topic.categoryName === 'blog'" :to="{path: '/blog/' + topic.id}">{{topic.title}}</router-link>
                  <router-link v-else :to="{path: '/topic/' + topic.id}">{{topic.title}}</router-link>
                </dt>
                <dd>
                  <span class="item"><router-link :to="{path: '/user/' + topic.userId}">{{topic.username}}</router-link>
                  发布于 <span class="datetime-ago">{{topic.rtime}}</span></span>
                  <span class="item">• <i class="reply-count">{{topic.commentCount}}</i> 个回复</span>
                  <span class="item">• <i class="view-count">{{topic.viewCount}}</i> 次浏览</span>

                  <!-- TODO 最后一个回复该问题的人 -->
                  <span class="item right">最后由 <router-link :to="{path: ''}">
                    <img src="/static/images/avatar.jpg"> username</router-link> 回复于
                    <span class="datetime-ago">5 个月前</span>
                  </span>
                </dd>
              </dl>
            </div>
          </div>

          <div v-if="topics.length === 0" class="no-data">
            暂无数据
          </div>
        </div>
        <div class="panel-footer">
          <app-pagination :current-page="currentPage" :total="totalTopicCount" :baseUrl="baseUrl"></app-pagination>
        </div>
      </div>
    </div>
    <app-aside></app-aside>
  </section>
</template>
<script>
import Aside from '../components/Aside'
import Pagination from '../components/Pagination'
import config from '../config'

export default {
  name: 'PageHome',
  components: {
    'app-aside': Aside,
    'app-pagination': Pagination
  },
  data: function () {
    return {
      currentPage: 1,
      totalTopicCount: 0,
      categories: [],
      topics: [],
      baseUrl: '',
      category: ''
    }
  },
  mounted: function () {
    this.loadTopics()
  },
  methods: {
    loadTopics: function () {
      let params = {
        pageId: this.$route.query.page ? this.$route.query.page : 1
        // categoryName: this.$route.params.category
      }

      fetch(config.urlPrefix + '/api/theme_list/page_id', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then(res => res.json())
        .then(data => {
          this.categories = data.categorys
          this.topics = data.themeList
          this.totalTopicCount = data.themePageNumber
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
<style lang="scss">
@import "../assets/styles/scss/sdk/index";

.panel {
  .panel-header{
    .tabs {
      padding: 0.5rem 1rem;
      min-height: 4rem;
      line-height: 3rem;
      font-size: 0;

      a {
        line-height: 2.2rem;
        height: 2.2rem;
        display: inline-block;
        font-size: 1.4rem;
        margin: 0 .3rem;
        color: $theme-color;
        background: transparent;
        border-radius: .3rem;
        padding: 0 .5rem;
        vertical-align: middle;
        @include transition(all .2s ease-in-out);

        &.active, &:hover {
          background: $theme-color;
          color: #fff;
        }
      }
    }
  }
}
</style>
