<template>
  <section>
    <div class="block-main">
      <div class="panel">
        <div class="panel-header">
          <app-crumbs :text="'注册'"></app-crumbs>
        </div>
        <div class="panel-content">
          <div class="frame-form" id="form-register">
            <div class="input-line">
              <label><span class="required">*</span>用户名：</label>
              <div class="input-wrapper"><input type="text" name="username" data-required="{'value': true, 'message': '用户名为必填项'}" data-pattern="{'value': '^[a-zA-Z0-9_-]{1,18}$', 'message': '用户名只能由字母、数字、下划线、中划线组成，且不能超过18位'}"></div>
            </div>
            <div class="input-line">
              <label><span class="required">*</span>密码：</label>
              <div class="input-wrapper"><input id="password" type="password" name="password" autocomplete="off" data-required="{'value': true, 'message': '密码为必填项'}" data-min-length="{'value': 6, 'message': '密码最少为6位'}" data-pattern="{'value': '^[a-zA-Z0-9]+$', 'message': '密码只能由字母和数字组成'}"></div>
            </div>
            <div class="input-line">
              <label><span class="required">*</span>重复密码：</label>
              <div class="input-wrapper"><input type="password" name="repeatPassword" autocomplete="off" data-required="{'value': true, 'message': '重复密码为必填项'}" data-min-length="{'value': 6, 'message': '重复密码最少为6位'}" data-pattern="{'value': '^[a-zA-Z0-9]+$', 'message': '密码只能由字母和数字组成'}" data-equal="{'value': '#password', 'message': '重复密码和密码不一致'}"></div>
            </div>
            <div class="input-line">
              <label><span class="required">*</span>邮箱：</label>
              <div class="input-wrapper"><input type="email" name="email" data-required="{'value': true, 'message': '邮箱为必填项'}" data-pattern="{'value': '^([a-zA-Z0-9_-]+\\.?)+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$', 'message': '您输入的邮箱格式不正确'}"></div>
            </div>
            <div class="error-line" id="error-line">
              <div class="error-wrapper">
                <i class="fa fa-exclamation-circle"></i> <span id="error-message"></span>
              </div>
            </div>
            <div class="btn-line">
              <div class="btn-wrapper">
                <a href="javascript:;" class="btn btn-primary" id="btn-register">注册</a> <a class="btn btn-primary" id="btn-github-login" href="#">通过 Github 登录</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-aside></app-aside>
  </section>
</template>
<script>
import Aside from '../components/Aside'
import Crumbs from '../components/Crumbs'

export default {
  name: 'page-register',
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
