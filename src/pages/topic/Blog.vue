<template>
  <section class="page-topic-detail">
    <div class="block-main">
      <div class="panel">
        <article class="article">
          <div class="article-header blog-header">
            <div class="title">
              <h3>{{topic.title}}</h3>
            </div>
            <div class="bottom-line">
              <div class="info">
                <span class="item">• 版块 <span class="tag tag-category">{{topicCategoryName}}</span></span>
                <span class="item">• 作者 <router-link :to="{path: '/user/' + topicUser.username}">{{topicUser.username}}</router-link></span>
                <span class="item">• 发布于 <span class="datetime-ago">{{topicRtime}}</span></span>
                <span class="item">• {{topic.commentCount}} 个回复</span>
                <span class="item">• {{topic.viewCount}} 次浏览</span>
              </div>
              <div class="operator operator-topic">
                <div>
                  <!-- TODO -->
                  <!--<span class="btn btn-edit"><i class="fa fa-edit"></i> 编辑</span>-->
                  <!--<span class="btn btn-delete"><i class="fa fa-trash"></i> 删除</span>-->
                  <span class="btn btn-collect"><i class="fa fa-star"></i><span class="text">已收藏</span></span>
                  <span class="btn btn-collect"><i class="fa fa fa-star-o"></i><span class="text">收藏</span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="article-content">
            <div class="markdown-body">
              <div class="markdown-text" v-html="topic.content" v-highlight></div>
            </div>
          </div>
        </article>
      </div>
      <div class="panel">
        <div class="panel-header">
          <div class="title"><span>{{topic.commentCount}}</span> 条回复</div>
        </div>
        <div class="panel-content">
          <div class="comment" v-for="(comment, index) in comments" :key="index">
            <div class="avatar">
              <router-link :to="{path: '/user/' + comment.username}"><img src="/static/images/avatar.jpg"></router-link>
            </div>
            <div class="info">
              <dl>
                <dt>
                  <div class="comment-info">
                    <router-link :to="{path: '/user/' + comment.username}" class="username">{{comment.username}}</router-link> • {{index + 1}} 楼 • <span class="datetime-ago">{{comment.rtime}}</span> <span v-if="topicUser.id === comment.userId">• <span class="tag">作者</span></span>
                  </div>
                  <div class="operator operator-comment">
                    <!-- TODO -->
                    <!--<span class="btn btn-edit"><i class="fa fa-edit"></i> 编辑</span>-->
                    <!--<span class="btn btn-delete"><i class="fa fa-trash"></i> 删除</span>-->
                  </div>
                </dt>
                <dd>
                  <div class="markdown-body" v-html="comment.content" v-highlight></div>
                </dd>
              </dl>
            </div>
          </div>

          <div v-if="topic.commentCount === 0" class="no-data">
            暂无回复
          </div>
        </div>
      </div>

      <div class="panel" v-if="isLogined">
        <div class="panel-header">
          <div class="title">添加回复</div>
        </div>
        <div class="panel-content">
          <div class="editor-wrapper">
            <div class="editor-wrapper-inner">
              <mavon-editor :boxShadow="false" :subfield="false" :externalLink="false" v-model="myComment"></mavon-editor>
            </div>
            <div class="btn-line">
              <span class="btn btn-primary btn-reply-topic" @click="comment">回复</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!isLogined" class="panel guide-login">请先登录再发表评论。<router-link :to="{path: '/login'}">登录</router-link></div>
    </div>
  </section>
</template>
<script>
import 'highlight.js'
import {mavonEditor} from 'mavon-editor'
import Aside from '../../components/Aside'
import config from '../../config'
import storage from '../../utils/storage'

export default {
  name: 'PageTopicBlog',
  components: {
    'app-aside': Aside,
    'mavon-editor': mavonEditor
  },
  data: function () {
    return {
      isLogined: false,
      topic: '',
      topicUser: '',
      topicRtime: '',
      topicCategory: '',
      topicCategoryName: '',
      comments: '',
      myComment: ''
    }
  },
  mounted: function () {
    this.isLogined = storage.isLogined()
    this.loadTopic()
  },
  methods: {
    validate: function () {
      if (this.myComment.trim() === '') {
        alert('回复内容不能为空')
        return false
      }
      return true
    },
    comment: function () {
      let userId = storage.getUserId()
      if (this.validate()) {
        let params = {
          userId: userId,
          comment: this.myComment,
          themeId: parseInt(this.$route.params.id),
          themeUserId: this.topicUser.id
        }
        fetch(config.urlPrefix + '/api/theme/' + this.$route.params.id, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(params)
        }).then(res => res.json())
          .then(data => {
            this.myComment = ''
            this.loadTopic()
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    loadTopic: function () {
      fetch(config.urlPrefix + '/api/theme/' + this.$route.params.id, {
        method: 'GET'
      }).then(res => res.json())
        .then(data => {
          this.topic = data.theme
          this.topicUser = data.themeUser
          this.topicRtime = data.themeRtime
          this.topicCategory = data.themeCategoryName
          this.topicCategoryName = data.themeCategoryNameCn
          this.comments = data.themeComments
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/styles/scss/sdk/index";
.blog-header {
  background: $blog-header-bg-color !important;

  .title{
    margin: 10rem;
    text-align: center;

    h3 {
      font-size: 3rem;
      line-height: 3.6rem;
      font-weight: bold;
      text-align: center;
    }
  }

  .bottom-line {
    overflow: hidden;
    height: 2rem;
    line-height: 2rem;

    & > div {
      height: 100%;
      line-height: 100%;
    }

    .info{
      float:left;
      color: $font-color !important;

      .item{
        vertical-align: middle;
      }
    }

    .operator{
      float:right;
      margin-top: 0;

      span{
        color: $blog-header-font-color;
      }
    }
  }

  .tag-category{
    color:  $font-color !important;
    background: #eee;
  }
}

@include mobile() {
  .blog-header {
    background: $blog-header-bg-color !important;

    .title{
      margin: 5rem 0 !important;

      h3 {
        font-size: 3rem;
        line-height: 3.6rem;
        font-weight: bold;
        text-align: center;
      }
    }

    .bottom-line{
      height: auto;
    }

    .operator{
      margin-top: 1rem !important;
    }
  }
}
</style>
