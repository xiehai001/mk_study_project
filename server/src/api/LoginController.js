import sendMail from "../config/mailConfig";
import moment from "moment";

class LoginController {
  constructor() {
  }

  async forget(ctx) {
    const {username,code} = ctx.request.body;
    try {
      let result = await sendMail({
        code: '1234',
        expire: moment().add(30, 'm').format('YYYY-MM-DD HH:mm:ss'),
        email: username,
        user: '测试'
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功'
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default new LoginController()