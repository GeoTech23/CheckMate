import authController from '../controllers/authController.ts';
import {Router} from 'express'
const authRouter = Router();

// authRouter.post('/login', authController.verifyUser, (req, res, next) => {
//     res.redirect(`/contact/${res.locals.user.id}`);
//     next();
// })

authRouter.get('/', (req, res) => {
  console.log('inside auth router');
  return res.status(200).send('hi')
})

authRouter.post('/', authController.createUser, (req, res, next) => {
  return res.status(200).json(res.locals.user)
  // next();
})

export default authRouter;