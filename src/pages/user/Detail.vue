<template>
  <section>
    <div class="user-info-wrapper">
      <div class="user-info">
        <div class="avatar">
          <img src="/static/images/avatar.jpg">
        </div>
        <ul>
          <li><span class="label">用户名：</span><div class="text">admin</div></li>
          <li><span class="label">GitHub账号：</span><div class="text"><a href="https://github.com/11" target="_blank" rel="nofollow">admin</a></div></li>
          <li><span class="label">邮箱：</span><div class="text"><a href="mailto:admin">admin</a></div></li>
          <li><span class="label">注册时间：</span><div class="text datetime-ago" data-datetime="admin"></div></li>
          <li>
            <div class="btn-line">
              <a class="btn btn-primary" href="/user/edit/admin">编辑个人资料</a>
              <a class="btn btn-primary" href="/user/change-password/admin">修改密码</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="topics-wrapper">
      <div class="tabs">
        <span><a href="#" class="active">话题</a></span>
        <span><a href="#">评论</a></span>
        <span><a href="#">收藏</a></span>
      </div>
      <div class="topics">
        <div class="no-data">暂无数据</div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'page-user-detail'
}
</script>

<style lang="scss">
@import "../../assets/styles/scss/sdk/index";

.topics-wrapper{
  margin-bottom: 1.5rem;
  background: #fff;
  .tabs{
    padding:0 1rem;
    border-bottom: .1rem solid $lighter-bd-color;
    span {
      display: inline-block;
      height: 4rem;
      line-height: 4rem;
      font-size: 1.4rem;
      margin-right: 2rem;
    }
    a{
      color: $font-color;
      display: inline-block;
      border-bottom: .2rem solid #fff;
      height: 100%;
      padding: 0 1.5rem;
      &:hover, &.active{
        color: $theme-color;
        border-color: $theme-color;
      }
    }
  }
}
</style>
