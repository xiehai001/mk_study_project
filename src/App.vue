<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <ValidationProvider rules="required|email" v-slot="{errors}">
            <div class="layui-input-inline">
                <input
                  type="text"
                  name="name"
                  required
                  lay-verify="required"
                  placeholder="请输入用户名"
                  autocomplete="off"
                  class="layui-input"
                  v-model.trim="name"
                />
            </div>
            <div class="error layui-form-mid">
             {{errors[0]}}
            </div>
          </ValidationProvider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-inline">
            <input
              type="password"
              name="password"
              required
              lay-verify="required"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
              v-model.trim="password"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="code"
              required
              lay-verify="required"
              placeholder="请输入验证码"
              autocomplete="off"
              class="layui-input"
              v-model.trim="code"
            />
          </div>
          <div class="layui-form-mid svg" v-html="captchaImg" @click="changeCapcha"></div>
        </div>
        <button type="button" class="layui-btn">点击登录</button>
        <a class="xh-link" href="">忘记密码</a>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN'

for (const rule in rules) {
  extend(rule, {
    ...rule,
    message: zh.messages[rule]
  })
}
export default {
  name: 'app',
  components: {
    ValidationProvider
  },
  data () {
    return {
      captchaImg: null,
      name: '',
      password: '',
      code: ''
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
    color: red;
  }
</style>
