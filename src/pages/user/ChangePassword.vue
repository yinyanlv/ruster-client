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
                <label><span class="required">*</span>当前密码：</label>
                <div class="input-wrapper"><input name="oldPassword" type="password" autocomplete="off" /></div>
              </div>
              <div class="input-line">
                <label><span class="required">*</span>新密码：</label>
                <div class="input-wrapper"><input name="newPassword" type="password" autocomplete="off" /></div>
              </div>
              <div class="input-line">
                <label><span class="required">*</span>重复新密码：</label>
                <div class="input-wrapper"><input name="repeatNewPassword" type="password" autocomplete="off" /></div>
              </div>
              <div class="error-line">
                <div class="error-wrapper">
                  <i class="fa fa-exclamation-circle"></i> <span>该功能暂未实现</span>
                </div>
              </div>
              <div class="btn-line">
                <div class="btn-wrapper">
                  <a href="javascript:;" class="btn btn-primary">更改密码</a>
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
  name: 'AppChangePassword'
}
</script>

<style scoped>

</style>
