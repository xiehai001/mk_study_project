<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li><router-link :to="{name:'Login'}" >登入</router-link></li>
          <li class="layui-this">注册</li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <ValidationProvider name="邮箱" rules="required|email" v-slot="{errors}">
                    <div class="layui-row">
                      <label class="layui-form-label">邮箱</label>
                      <div class="layui-input-inline">
                        <input type="text" name="username" v-model="username" placeholder="请输入邮箱" autocomplete="off" class="layui-input">
                      </div>
                      <div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div>
                    </div>
                    <div class="layui-form-mid"><span style="color: #c00;">{{errors[0]}}</span></div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <ValidationProvider name="昵称" rules="required|min:6" v-slot="{errors}">
                    <div class="layui-row">
                      <label class="layui-form-label">昵称</label>
                      <div class="layui-input-inline">
                        <input type="text" name="nickname" v-model="nickname" autocomplete="off" class="layui-input">
                      </div>
                    </div>
                    <div class="layui-form-mid"><span style="color: #c00;">{{errors[0]}}</span></div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <ValidationProvider name="密码" rules="required|min:6|max:16" vid="password" v-slot="{errors}">
                    <div class="layui-row">
                      <label  class="layui-form-label">密码</label>
                      <div class="layui-input-inline">
                        <input type="password"  name="password" v-model="password"  autocomplete="off" class="layui-input">
                      </div>
                      <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                    </div>
                    <div class="layui-form-mid"><span style="color: #c00;">{{errors[0]}}</span></div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <ValidationProvider name="确认密码" rules="confirmed:password" v-slot="{errors}">
                    <div class="layui-row">
                      <label  class="layui-form-label">确认密码</label>
                      <div class="layui-input-inline">
                        <input type="password" name="repass" v-model="repass" autocomplete="off" class="layui-input">
                      </div>
                    </div>
                    <div class="layui-form-mid"><span style="color: #c00;">{{errors[0]}}</span></div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <ValidationProvider name="验证码" rules="required|length:4" v-slot="{errors}">
                    <div class="layui-row">
                      <label class="layui-form-label">验证码</label>
                      <div class="layui-input-inline">
                        <input type="text"  name="code" placeholder="验证码" v-model="code" autocomplete="off" class="layui-input">
                      </div>
                      <div class="layui-form-mid">
                        <span   class="svg-code" v-html="svg" @click="_getCode"></span>
                      </div>
                    </div>
                    <div class="layui-form-mid"><span style="color: #c00;">{{errors[0]}}</span></div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn">立即注册</button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
                  <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
                  <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationProvider, extend } from 'vee-validate'
import * as Rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/zh_CN'
import { getCode } from '../api/login'
Object.keys(Rules).forEach(rule => {
  extend(rule, { ...Rules[rule], message: messages[rule] })
})
export default {
  name: 'reg',
  components: {
    ValidationProvider
  },
  data () {
    return {
      username: '',
      password: '',
      code: '',
      svg: '',
      repass: '',
      nickname: ''
    }
  },
  mounted () {
    this._getCode()
  },
  methods: {
    _getCode () {
      getCode().then(res => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .svg-code{
    position: relative;
    top: -8px;
  }
</style>
