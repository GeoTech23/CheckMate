import { Request, Response, NextFunction } from 'express';
import contactDB from '../models/contactModel'
// import { Request, Response, NextFunction } from 'express';


const contactController = {

  getContacts:(_req: Request, res: Response,  next: NextFunction) => {
    const queryStr = `
    SELECT * FROM contacts
    `
    contactDB.query(queryStr)
      .then((data) => {
        console.log('data here', data)
        res.locals.contacts = data.rows; 
        return next(); 
      })
      .catch((err: Error) => {
      return next((err)) 
    })
  }
}

// contactController.deleteContacts = (req: Request, res: Response, next: NextFunction) => {
//   const queryStr = `
//   SELECT * FROM contacts
//   `
//   contactDB.query(queryStr)
//     .then((data) => {
//       console.log('data here', data)
//       res.locals.contacts = data.rows; 
//       return next; 
//     })
//     .catch((err: Error) => {
//     return next((err))
//   })
// }

export default contactController;