import authController from '../controllers/authController.ts';
import {Router} from 'express'
const authRouter = Router();

authRouter.post('/', authController.verifyUser, (req, res, next) => {
  res.redirect(`/contact/${res.locals.user.userId}`);
})

authRouter.get('/', (req, res) => {
  res.status(200).send('in login')
})

// authRouter.post('/', authController.createUser, (req, res, next) => {
//   return res.status(200).json(res.locals.user);
// })

export default authRouter;