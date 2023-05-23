import User from '../models/userModel.ts'
import { Request, Response, NextFunction } from 'express';

const authController = {
  verifyUser: (req:Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;  
    User.findOne({ username: username })
      .then((data) => {
        if (!data) {
          return next({
            status: 404,
            log: 'User not found',
            message: 'User not found'
          })
        }
        else if (username === data.username && password === data.password) {
          const userId = data._id;
          res.locals.user = { username, userId };
          return next();
        }
        else {
          return next({
            status: 404,
            log: 'Incorrect credentials',
            message: 'Incorrect Credentials'
          })
        }
      })
      .catch((err) => {
        return next({
          log: `Error in authController.verifyUser: ${err}`,
          message: {err: 'Error in authController.verifyUser'}
      })
    })
  },

  createUser: (req: Request, res: Response, next: NextFunction) => {
    console.log('inside createUser')
    console.log(req.body)
    const { username, password } = req.body; 
    
    User.findOne({ username: username })
      .then((data) => {
      console.log(data)
      if (data) {
        console.log('User already exists');
        res.locals.user = false;
        return next();
      } else {
          // const newUser = new User(username, password)
          const newUser = User.create({ username: username, password: password})
          // newUser.create()
            .then((data) => {
              console.log('User saved:', data)
              res.locals.user = true;
              return next();
          })
        }
      })
      .catch((err) => {
        return next({
          log: `Error in authController.createUser: ${err}`,
          message: {err: 'Error in authController.createUser'}
      })
    })

  }

};
  
  
  

export default authController;