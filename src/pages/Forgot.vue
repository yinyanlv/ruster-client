<template>
  <section>
    <div class="block-main">
      <div class="panel">
        <div class="panel-header">
          <app-crumbs :text="'忘记密码'"></app-crumbs>
        </div>
        <div class="panel-content">
          <div class="frame-form">
            <div class="input-line">
              <label><span class="required">*</span>邮箱：</label>
              <div class="input-wrapper"><input type="email" name="email" placeholder="请输入您注册时所使用的邮箱" /></div>
            </div>
            <div class="error-line" id="error-line">
              <div class="error-wrapper">
                <i class="fa fa-exclamation-circle"></i><span id="error-message">{{errorMessage}}</span>
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
  </section>
</template>
<script>
import Aside from '../components/Aside'
import Crumbs from '../components/Crumbs'

export default {
  name: 'PageForgot',
  components: {
    'app-crumbs': Crumbs,
    'app-aside': Aside
  },
  mounted: function () {
  },
  data: function () {
    return {
      errorMessage: '该功能暂未实现'
    }
  }
}
</script>
