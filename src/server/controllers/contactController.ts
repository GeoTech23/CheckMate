import { Request, Response, NextFunction } from 'express';
import contactDB from '../models/contactModel.ts'
// import { Request, Response, NextFunction } from 'express';


const contactController = {

  getContacts:(_req: Request, res: Response,  next: NextFunction) => {
    const { userId } = _req.query
    const queryStr = `
    SELECT * FROM contacts WHERE id = ${ userId };
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
  },


  deleteContact:(req: Request, res: Response, next: NextFunction) => {
    const {userId} = req.query;
    const {contactId} = req.body;
    const queryStr = `
    DELETE FROM table_name WHERE contactId = ${ contactId } 
    `
    //this query returns the number of deleted rows
    contactDB.query(queryStr)
      .then((data) => {
        console.log('Succesfully deleted - ', data, ' row(s)')
        res.locals.contacts = data; 
        return next(); 
      })
      .catch((err: Error) => {
      return next((err))
    })
  },


  addContact:(req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.query;
    const { firstName, lastName, birthday, phoneNumber, days_before_reminder } = req.body;
    const queryStr = `
    INSERT INTO contacts (firstname, lastname, birthday, phonenumber, days_before_reminder, userId)
    VALUES ('${firstName}', '${lastName}', '${birthday}', '${phoneNumber}', ${days_before_reminder}, ${userId});
    `
    //this query returns number of rows added
    contactDB.query(queryStr)
      .then((data) => {
        console.log('Successsfully added - ', data, ' contact')
        res.locals.contacts = data; 
        return next; 
      })
      .catch((err: Error) => {
      return next((err))
    })
  }
}


export default contactController;