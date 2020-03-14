<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div class="layui-form-item" :class="{'form-group-error':$v.name.$error}">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入用户名"
              autocomplete="off"
              class="layui-input"
              v-model.trim="name"
              @input="setName($event.target.value)"
            />
          </div>
          <div class="error" v-if="!$v.name.required">用户民不能空</div>
          <div class="error" v-if="!$v.name.email">用户民输入格式有误</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-inline">
            <input
              type="password"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
              v-model.trim="password"
            />
          </div>
            <div class="error" v-if="!$v.password.required">密码不能空</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入验证码"
              autocomplete="off"
              class="layui-input"
              v-model.trim="code"
            />
          </div>
          <div class="layui-form-mid svg" v-html="captchaImg" @click="changeCapcha"></div>
          <div class="error" v-if="!$v.code.required">验证码不能为空</div>
        </div>
        <button type="button" class="layui-btn" @click="checkFrom">点击登录</button>
        <a class="xh-link" href="">忘记密码</a>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'app',
  data () {
    return {
      captchaImg: null,
      name: '',
      password: '',
      code: '',
      errMsg: []
    }
  },
  validations: {
    name: {
      required,
      email
    },
    password: {
      required
    },
    code: {
      required
    }
  },
  mounted () {
    axios.get('http://localhost:3000/getcaptcha').then((res) => {
      this.captchaImg = res.data.data
    })
  },
  methods: {
    changeCapcha () {
      axios.get('http://localhost:3000/getcaptcha').then((res) => {
        this.captchaImg = res.data.data
      })
    },
    checkFrom () {
      this.errMsg = []
      if (!this.name) {
        this.errMsg.push('登录名不能为空')
      }
      if (!this.password) {
        this.errMsg.push('密码不能为空')
      }
      if (!this.code) {
        this.errMsg.push('验证码不能为空')
      }
    },
    setName (value) {
      this.name = value
      this.$v.name.$touch()
    }
  }
}
</script>
<style lang="scss" scoped>
  #app {
    background-color: #f2f2f2;
  }

  .layui-container {
    background-color: #fff;
  }

  input {
    width: 190px;
  }

  .xh-link {
    margin-left: 10px;
    font-weight: bold;

    &:hover {
      color: #009688
    }
  }

  .svg {
    position: relative;
    top: -15px;
  }
  .error{
    display: none;
  }
  .form-group-error{
    .error{
      display: block;
      color: red;
    }
  }
</style>
