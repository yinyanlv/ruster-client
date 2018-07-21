<template>
  <section>
    <div class="block-main">
      <div class="panel">
        <div class="panel-header">
          <app-crumbs :text="'注册'"></app-crumbs>
        </div>
        <div class="panel-content">
          <div class="frame-form" >
            <div class="input-line">
              <label><span class="required">*</span>用户名：</label>
              <div class="input-wrapper"><input type="text" name="username" v-model="username" @focus="clearError" @keyup.enter="register"></div>
            </div>
            <div class="input-line">
              <label><span class="required">*</span>邮箱：</label>
              <div class="input-wrapper"><input type="email" name="email" v-model="email" @focus="clearError" @keyup.enter="register"></div>
            </div>
            <div class="input-line">
              <label><span class="required">*</span>密码：</label>
              <div class="input-wrapper"><input type="password" name="password" v-model="password" autocomplete="off" @focus="clearError" @keyup.enter="register"></div>
            </div>
            <div class="input-line">
              <label><span class="required">*</span>确认密码：</label>
              <div class="input-wrapper"><input type="password" name="confirmPassword" v-model="confirmPassword" autocomplete="off" @focus="clearError" @keyup.enter="register"></div>
            </div>
            <div class="error-line" v-if="isShowError">
              <div class="error-wrapper">
                <i class="fa fa-exclamation-circle"></i> <span>{{errorMessage}}</span>
              </div>
            </div>
            <div class="btn-line">
              <div class="btn-wrapper">
                <a href="javascript:;" class="btn btn-primary" @click="register">注册</a>
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
import {USERNAME_REG, EMAIL_REG, PASSWORD_REG} from '../utils/regex'
import {ERROR_MESSAGE} from '../utils/message'
import config from '../config'

export default {
  name: 'PageRegister',
  components: {
    'app-crumbs': Crumbs,
    'app-aside': Aside
  },
  mounted: function () {

  },
  data: function () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
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

      if (this.email.trim() === '') {
        this.showError(ERROR_MESSAGE.emailRequired)
        return false
      }

      if (!EMAIL_REG.test(this.email)) {
        this.showError(ERROR_MESSAGE.emailRegex)
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

      if (this.confirmPassword.trim() === '') {
        this.showError(ERROR_MESSAGE.confirmPasswordRequired)
        return false
      }

      if (!PASSWORD_REG.test(this.confirmPassword)) {
        this.showError(ERROR_MESSAGE.confirmPasswordRegex)
        return false
      }

      if (this.confirmPassword !== this.password) {
        this.showError(ERROR_MESSAGE.passwordNotEqual)
        return false
      }
      return true
    },
    register: function () {
      if (this.validate()) {
        let params = {
          username: this.username,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        }
        fetch(config.urlPrefix + '/user/signup', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(params)
        }).then(res => res.json())
          .then(data => {
            if (data.status === 200) {
              this.$router.push('/login')
            } else {
              this.isShowError = true
              this.errorMessage = data.message
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
}
</script>
