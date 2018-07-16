<template>
  <div class="page-topic-detail">
    <div class="block-main">
      <div class="panel">
        <article class="article">
          <div class="article-header">
            <div class="title">
              <!-- TODO -->
              <!--<span class="tag">置顶</span>-->
              <!--<span class="tag">精华</span>-->
              <h3>title</h3>
            </div>
            <div class="info">
              <span class="item">• 版块 <span class="tag tag-category">aaa</span></span>
              <span class="item">• 作者 <a href="#">abc</a></span>
              <span class="item">• 发布于 <span class="datetime-ago">3小时</span></span>
              <!-- TODO -->
              <!--<span class="item">• 最后一次编辑 <span class="datetime-ago"></span></span>-->
              <!--<span class="item">• n 个回复</span>-->
              <!--<span class="item">• n 次浏览</span>-->
            </div>
            <div class="operator operator-topic">
              <div>
                <span class="btn"><i class="fa fa-arrow-circle-o-up"></i><span class="text">已置顶</span></span>
                <span class="btn"><i class="fa fa-arrow-circle-o-up"></i><span class="text">置顶</span></span>
                <span class="btn"><i class="fa fa-graduation-cap"></i><span class="text">已设为精华</span></span>
                <span class="btn"><i class="fa fa-graduation-cap"></i><span class="text">设为精华</span></span>
                <span class="btn btn-edit"><i class="fa fa-edit"></i>编辑</span>
                <span class="btn btn-delete"><i class="fa fa-trash"></i>删除</span>
                <span class="btn btn-collect"><i class="fa fa-star"></i><span class="text">已收藏</span></span>
                <span class="btn btn-collect"><i class="fa fa fa-star-o"></i><span class="text">收藏</span></span>
                <span class="btn btn-agree"><i class="fa fa-thumbs-up"></i><span class="text">已赞</span> <span class="num">n</span></span>
                <span class="btn btn-agree"><i class="fa fa-thumbs-o-up"></i><span class="text">赞</span> <span class="num">n</span></span>
                <span class="btn btn-disagree" data-disagreed="true"><i class="fa fa-thumbs-down"></i><span class="text">已踩</span> <span class="num">n</span></span>
                <span class="btn btn-disagree" data-disagreed="false"><i class="fa fa-thumbs-o-down"></i><span class="text">踩</span> <span class="num">n</span></span>
              </div>
            </div>
          </div>
          <div class="article-content">
            <div class="markdown-body">
              <div class="markdown-text">article content</div>
            </div>
          </div>
        </article>
      </div>
      <div class="panel">
        <div class="panel-header">
          <div class="title"><span>n</span> 条回复</div>
        </div>
        <div class="panel-content">

          <div class="comment highlight">
            <div class="avatar">
              <a href="#"><img src="/static/images/avatar.jpg"></a>
            </div>
            <div class="info">
              <dl>
                <dt>
                  <div class="comment-info">
                    <a href="#" class="username">admin</a> • n 楼 • <span class="datetime-ago">3小时</span> • <span class="tag">作者</span>
                  </div>
                  <div class="operator operator-comment">
                    <span class="btn btn-edit"><i class="fa fa-edit"></i> 编辑</span>
                    <span class="btn btn-delete"><i class="fa fa-trash"></i> 删除</span>
                    <span class="btn btn-reply"><i class="fa fa fa-mail-reply"></i> <span class="text" data-show-editor="false">回复</span></span>
                    <span class="btn btn-agree"><i class="fa fa-thumbs-up"></i> <span class="text">已赞</span> <span class="num">n</span></span>
                    <span class="btn btn-agree"><i class="fa fa-thumbs-o-up"></i> <span class="text">赞</span> <span class="num">n</span></span>
                    <span class="btn btn-disagree"><i class="fa fa-thumbs-down"></i> <span class="text">已踩</span> <span class="num">n</span></span>
                    <span class="btn btn-disagree"><i class="fa fa-thumbs-o-down"></i> <span class="text">踩</span> <span class="num">n</span></span>
                  </div>
                </dt>
                <dd>
                  <div class="markdown-body">
                    comment-content
                  </div>
                </dd>

                <!-- editor -->
                <dd class="editor-wrapper-box">
                  <div class="editor-wrapper">
                    <div class="editor-wrapper-inner">
                      <textarea class="editor"></textarea>
                    </div>
                    <div class="btn-line">
                      <span class="btn btn-primary btn-reply-topic">回复</span>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
          </div>

          <div class="no-data">
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
              <textarea class="editor" id="reply-topic-editor"></textarea>
            </div>
            <div class="btn-line">
              <span class="btn btn-primary btn-reply-topic">回复</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-aside></app-aside>
  </div>
</template>
<script>
import 'highlight.js'
import Aside from '../../components/Aside'
export default {
  name: 'page-topic-detail',
  components: {
    'app-aside': Aside
  }
}
</script>
<style lang="scss">

</style>
