<template>
  <section>
    <div class="user-info-wrapper">
      <div class="user-info">
        <div class="avatar">
          <img src="/static/images/avatar.jpg">
        </div>
        <ul>
          <li>
            <div class="frame-form" id="form-user">
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
              <div class="error-line" id="error-line">
                <div class="error-wrapper">
                  <i class="fa fa-exclamation-circle"></i> <span id="error-message"></span>
                </div>
              </div>
              <div class="btn-line">
                <div class="btn-wrapper">
                  <a href="javascript:;" class="btn btn-primary" id="btn-save-user">保存设置</a>
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
  name: 'page-user-edit'
}
</script>

<style scoped>

</style>
