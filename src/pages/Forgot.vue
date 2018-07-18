<template>
  <div>
    <div class="block-main">
      <div class="panel">
        <div class="panel-header">
          <app-crumbs :text="'忘记密码'"></app-crumbs>
        </div>
        <div class="panel-content">
          <div class="frame-form" id="form-reset-password">
            <div class="input-line">
              <label><span class="required">*</span>邮箱：</label>
              <div class="input-wrapper"><input type="email" name="email" placeholder="请输入您注册时所使用的邮箱" data-required="{'value': true, 'message': '邮箱为必填项'}" data-pattern="{'value': '^([a-zA-Z0-9_-]+\\.?)+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$', 'message': '您输入的邮箱格式不正确'}"></div>
            </div>
            <div class="error-line" id="error-line">
              <div class="error-wrapper">
                <i class="fa fa-exclamation-circle"></i><span id="error-message">{{message}}</span>
              </div>
            </div>
            <div class="btn-line">
              <div class="btn-wrapper">
                <a href="javascript:;" class="btn btn-primary" id="btn-reset-password">发送验证邮件</a>
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
  name: 'page-forgot',
  components: {
    'app-crumbs': Crumbs,
    'app-aside': Aside
  },
  mounted: function () {
  },
  data: function () {
    return {
      message: ''
    }
  }
}
</script>
