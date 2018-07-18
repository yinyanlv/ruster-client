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
        <span>话题</span>
        <span>评论</span>
        <span>收藏</span>
      </div>
      <div class="topics">
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
</style>
