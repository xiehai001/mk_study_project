import Router from 'koa-router'
import PublicController from '../api/PublicController'
const router = new Router()

router.get('/getcaptcha', PublicController.getCaptche)

export default router;