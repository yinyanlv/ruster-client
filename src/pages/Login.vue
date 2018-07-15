<template>
  <div id="page-login">
    <div class="block-main">
      <div class="panel">
        <div class="panel-header">
          <app-crumbs></app-crumbs>
        </div>
        <div class="panel-content">
          <div class="frame-form" id="form-login">
            <div class="input-line">
              <label><span class="required">*</span>用户名：</label>
              <div class="input-wrapper"><input type="text" name="username" data-required="{'value': true, 'message': '用户名为必填项'}" data-pattern="{'value': '^[a-zA-Z0-9_-]{1,18}$', 'message': '用户名只能由字母、数字、下划线、中划线组成，且不能超过18位'}"></div>
            </div>
            <div class="input-line">
              <label><span class="required">*</span>密码：</label>
              <div class="input-wrapper"><input type="password" name="password" autocomplete="off" data-required="{'value': true, 'message': '密码为必填项'}" data-min-length="{'value': 6, 'message': '密码最少为6位'}" data-pattern="{'value': '^[a-zA-Z0-9]+$', 'message': '密码只能由字母和数字组成'}"></div>
            </div>
            <div class="help-line">
              <div class="help-wrapper">
                <a href="/forgot">忘记密码？</a>
              </div>
            </div>
            <div class="error-line" id="error-line">
              <div class="error-wrapper">
                <i class="fa fa-exclamation-circle"></i><span id="error-message">您输入的用户名或密码有误！</span>
              </div>
            </div>
            <div class="btn-line">
              <div class="btn-wrapper">
                <a href="javascript:;" class="btn btn-primary" id="btn-login">登录</a> <a class="btn btn-primary" id="btn-github-login" href="#">通过 Github 登录</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-aside></app-aside>
  </div>
</template>
<script>
import Aside from '../components/Aside'
import Crumbs from '../components/Crumbs'

export default {
  name: 'page-login',
  components: {
    'app-crumbs': Crumbs,
    'app-aside': Aside
  },
  mounted: function () {
  },
  data: function () {
    return {
    }
  }
}
</script>
