import User from '../models/userModel.ts'
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs'

function hashPw(password) {
  const saltFactor = 10
  return bcrypt.hashSync(password, saltFactor);
}

const authController = {
  verifyUser: (req:Request, res: Response, next: NextFunction) => {
    console.log('verifying user data')
    const { username, password } = req.body;  
    User.findOne({ username: username })
      .then((data) => {
        console.log('data here', data)
        if (data !== null && bcrypt.compare(password, data.password)) {
          const userId = data._id;
          res.locals.user = { username, userId };
          return next();
        }
        else {
          return next({
            status: 400,
            log: 'Incorrect credentials',
            message: {err: 'Incorrect Credentials'}
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
        console.log('Creating a new user')
          // const newUser = new User(username, password)
          User.create({ username: username, password: hashPw(password)})
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

/*
userController.verifyUser = async function (req, res, next) {
	const { username, password } = req.body;
	if (!username || !password){
		return next({
			log: `Server could not complete request error, invalid login`,
			message: 'Error querying database for username',
		});
	}
	//query database for user
	try {
		//query database for user
		const user = await User.findOne({ username: username })	
			console.log('user:', user);
			if (!user) {
				res.locals.user = false;
				console.log('user not found')
				return next();
			} 
			// username exists, compare password
			const passwordMatch = await bcrypt.compare(password, user.password)
			if (passwordMatch) {
				res.locals.user = user;
				return next();
			} else {
			res.locals.user = false;
			return next();
			}
	} catch (error) {
		return next({
			log: `Middleware error at userController.verifyUser`,
			message: 'Error verifying that user is stored in the database.',
		});
	}
};
*/