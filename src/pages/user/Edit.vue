<template>
  <section>
    <div class="user-info-wrapper">
      <div class="user-info">
        <div class="avatar">
          <img src="/static/images/avatar.jpg">
        </div>
        <ul>
          <li>
            <div class="frame-form">
              <div class="input-line">
                <label><span class="required">*</span>用户名：</label>
                <div class="input-wrapper"><input name="username" type="text" value="" /></div>
              </div>
              <div class="input-line">
                <label><span class="required">*</span>邮箱：</label>
                <div class="input-wrapper"><input name="email" type="text" value="" /></div>
              </div>
              <div class="input-line">
                <label>GitHub账号：</label>
                <div class="input-wrapper"><input name="githubAccount" type="text" value=""></div>
              </div>
              <div class="error-line">
                <div class="error-wrapper">
                  <i class="fa fa-exclamation-circle"></i> <span>该功能暂未实现</span>
                </div>
              </div>
              <div class="btn-line">
                <div class="btn-wrapper">
                  <a href="javascript:;" class="btn btn-primary">保存设置</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageUserEdit'
}
</script>

<style scoped>

</style>
