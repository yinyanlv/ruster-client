<template>
  <section class="page-topic-detail">
    <div class="block-main">
      <div class="panel">
        <article class="article">
          <div class="article-header">
            <div class="title">
              <span class="tag" v-if="topicCategory==='office'">官方</span>
              <h3>{{topic.title}}</h3>
            </div>
            <div class="info">
              <span class="item">• 版块 <span class="tag tag-category">{{topicCategoryName}}</span></span>
              <span class="item">• 作者 <a :href="'/user/' + topicUser.username">{{topicUser.username}}</a></span>
              <span class="item">• 发布于 <span class="datetime-ago">{{topicRtime}}</span></span>
              <span class="item">• {{topic.commentCount}} 个回复</span>
              <span class="item">• {{topic.viewCount}} 次浏览</span>
            </div>
            <div class="operator operator-topic">
              <div>
                <!-- TODO -->
                <!--<span class="btn btn-edit"><i class="fa fa-edit"></i> 编辑</span>-->
                <!--<span class="btn btn-delete"><i class="fa fa-trash"></i> 删除</span>-->
                <!--<span class="btn btn-collect"><i class="fa fa-star"></i><span class="text">已收藏</span></span>-->
                <!--<span class="btn btn-collect"><i class="fa fa fa-star-o"></i><span class="text">收藏</span></span>-->
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
              <a :href="'/user/' + comment.username"><img src="/static/images/avatar.jpg"></a>
            </div>
            <div class="info">
              <dl>
                <dt>
                  <div class="comment-info">
                    <a :href="'/user/' + comment.username" class="username">{{comment.username}}</a> • {{index + 1}} 楼 • <span class="datetime-ago">{{comment.rtime}}</span> <span v-if="topicUser.id === comment.userId">• <span class="tag">作者</span></span>
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

      <div class="panel">
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
    </div>
    <app-aside></app-aside>
  </section>
</template>
<script>
import 'highlight.js'
import {mavonEditor} from 'mavon-editor'
import Aside from '../../components/Aside'
import config from '../../config'

export default {
  name: 'page-topic-detail',
  components: {
    'app-aside': Aside,
    'mavon-editor': mavonEditor
  },
  data: function () {
    return {
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
      let userId = JSON.parse(localStorage.getItem('user')).id
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

.article {
  width: 100%;
}

.article-header {
  padding: 1rem;
  font-size: 1.2rem;
  background: $panel-header-bg-color;
  border-bottom: .1rem solid $lighter-bd-color;

  .title {
    line-height: 2.6rem;
    margin: .8rem 0;

    h3 {
      font-size: 2rem;
      font-weight: 700;
      display: inline;
    }
  }

  .info {
    line-height: 1.8rem;
    color: $lightest-font-color;

    a {
      color: $ask-user-color;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .operator {
    overflow: hidden;
    margin-top: .5rem;

    & > div {
      float: right;
    }

    span {
      padding: 0 0.4rem;
      color: $theme-color;
      line-height: 1.8rem;
      cursor: pointer;

      .fa {
        margin-right: .3rem;
      }

      .text {
        padding: 0;
      }

      .num {
        padding: 0 .1rem;
      }
    }
  }
}

.article-content {
  padding: 1rem;

}

.comment {
  padding: 1rem;
  border-bottom: .1rem solid $lighter-bd-color;

  &.highlight {
    background: $comment-highlight-bg-color;
  }

  .avatar {
    width: 3rem;
    height: 3rem;
    @include borderRadius(.3rem);
    float: left;

    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      @include borderRadius(.3rem);
    }
  }

  .info {
    padding-left: 4rem;

    dt {
      overflow: hidden;
      font-size: 1.2rem;
      color: $theme-color;
      line-height: 1.8rem;

      .comment-info {
        float: left;
      }

      .operator {
        float: right;
      }

      .username {
        color: $lighter-font-color;
        font-weight: bold;
      }

      .btn {
        color: $theme-color;
        padding: 0 0.4rem;
      }

      .num {
        padding: 0 0.1rem;
      }
    }

    dd {
      margin-top: .6rem;

      &.editor-wrapper-box {
        display: none;
      }
    }
  }

  .editor-wrapper {
    padding: 1rem 0 0;
  }
}

@include mobile() {

  .comment {

    .info {

      dt {

        .operator {

          margin-top: .5rem;
          width: 100%;
          float: left;
        }
      }
    }
  }
}
</style>
