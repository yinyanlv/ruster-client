<template>
  <section>
    <div class="block-main">
      <div class="panel">
        <div class="panel-header">
          <app-crumbs :text="'登录'"></app-crumbs>
        </div>
        <div class="panel-content">
          <div class="frame-form">
            <div class="input-line">
              <label><span class="required">*</span>用户名：</label>
              <div class="input-wrapper"><input type="text" name="username" v-model="username" @focus="clearError" @keyup.enter="login" /></div>
            </div>
            <div class="input-line">
              <label><span class="required">*</span>密码：</label>
              <div class="input-wrapper"><input type="password" name="password" autocomplete="off" v-model="password" @focus="clearError" @keyup.enter="login" /></div>
            </div>
            <!-- TODO -->
            <!--<div class="help-line">-->
              <!--<div class="help-wrapper">-->
                <!--<a href="/forgot">忘记密码？</a>-->
              <!--</div>-->
            <!--</div>-->
            <div class="error-line" v-if="isShowError">
              <div class="error-wrapper">
                <i class="fa fa-exclamation-circle"></i> <span>{{errorMessage}}</span>
              </div>
            </div>
            <div class="btn-line">
              <div class="btn-wrapper">
                <a href="javascript:;" class="btn btn-primary" @click="login">登录</a>
                <!-- TODO -->
                <!--<a class="btn btn-primary" href="#">通过 Github 登录</a>-->
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
import {USERNAME_REG, PASSWORD_REG} from '../utils/regex'
import {ERROR_MESSAGE} from '../utils/message'
import config from '../config'

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
      username: '',
      password: '',
      isShowError: false,
      errorMessage: ''
    }
  },
  methods: {
    clearError: function () {
      this.isShowError = false
      this.errorMessage = ''
    },
    showError: function (message) {
      this.isShowError = true
      this.errorMessage = message
    },
    validate: function () {
      this.clearError()
      if (this.username.trim() === '') {
        this.showError(ERROR_MESSAGE.usernameRequired)
        return false
      }
      if (!USERNAME_REG.test(this.username)) {
        this.showError(ERROR_MESSAGE.usernameRegex)
        return false
      }

      if (this.password.trim() === '') {
        this.showError(ERROR_MESSAGE.passwordRequired)
        return false
      }

      if (!PASSWORD_REG.test(this.password)) {
        this.showError(ERROR_MESSAGE.passwordRegex)
        return false
      }

      return true
    },
    login: function () {
      if (this.validate()) {
        let data = {
          username: this.username,
          password: this.password
        }
        fetch(config.urlPrefix + '/user/signin', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json())
          .then(data => {
            if (data.status === 200) {
              localStorage.setItem('token', data.token)
              localStorage.setItem('user', JSON.stringify(data.signinUser))
              this.$router.push('/')
            } else {
              this.isShowError = true
              this.errorMessage = data.message || ERROR_MESSAGE.loginInvalid
            }
          })
          .catch((e) => {
            console.log(e)
          })
      }
    }
  }
}
</script>
