import { Validator } from 'vee-validate'

const dictionary = {
  zh_CN: {
    messages: {
      required: field => '请输入' + field,
      email: () => '请输入正确的邮箱格式',
      min: () => '不符合最小长度',
      length: field => field + '长度要求4'
    },
    attributes: {
      email: '邮箱',
      password: '密码',
      name: '账号',
      code: '验证码'
    }
  }
}
Validator.localize(dictionary)
