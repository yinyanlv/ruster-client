<template>
  <section>
    <div class="user-info-wrapper">
      <div class="user-info">
        <div class="avatar">
          <img src="/static/images/avatar.jpg">
        </div>
        <ul>
          <li>
            <div class="frame-form" id="form-change-password">
              <div class="input-line">
                <label><span class="required">*</span>当前密码：</label>
                <div class="input-wrapper"><input name="oldPassword" type="password" autocomplete="off" data-required="{'value': true, 'message': '密码为必填项'}" data-min-length="{'value': 6, 'message': '密码最少为6位'}" data-pattern="{'value': '^[a-zA-Z0-9]+$', 'message': '密码只能由字母和数字组成'}"></div>
              </div>
              <div class="input-line">
                <label><span class="required">*</span>新密码：</label>
                <div class="input-wrapper"><input name="newPassword" id="new-password" type="password" autocomplete="off" data-required="{'value': true, 'message': '密码为必填项'}" data-min-length="{'value': 6, 'message': '密码最少为6位'}" data-pattern="{'value': '^[a-zA-Z0-9]+$', 'message': '密码只能由字母和数字组成'}"></div>
              </div>
              <div class="input-line">
                <label><span class="required">*</span>重复新密码：</label>
                <div class="input-wrapper"><input name="repeatNewPassword" type="password" autocomplete="off"  data-required="{'value': true, 'message': '重复密码为必填项'}" data-min-length="{'value': 6, 'message': '重复密码最少为6位'}" data-pattern="{'value': '^[a-zA-Z0-9]+$', 'message': '密码只能由字母和数字组成'}" data-equal="{'value': '#new-password', 'message': '重复新密码和新密码不一致'}"></div>
              </div>
              <div class="error-line" id="error-line">
                <div class="error-wrapper">
                  <i class="fa fa-exclamation-circle"></i> <span id="error-message"></span>
                </div>
              </div>
              <div class="btn-line">
                <div class="btn-wrapper">
                  <a href="javascript:;" class="btn btn-primary" id="btn-change-password">更改密码</a>
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
        name: "ChangePassword"
    }
</script>

<style scoped>

</style>
