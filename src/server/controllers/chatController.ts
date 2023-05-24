import { Request, Response, NextFunction } from 'express';
import contactDB from '../models/contactModel.ts';

const chatController = {
  //taking a contactid and returning all the messages associated with that contact
  getChat: (req, res, next) => {
    console.log('getting chats')
    const { contactId } = req.params;
    const queryStr = `
    SELECT * FROM notes WHERE contactId = ${ contactId };
    `
    contactDB.query(queryStr)
      .then((data) => {
        console.log('data here', data.rows)
        res.locals.chats = data.rows; 
        return next(); 
      }
      )
      .catch((err) => {
      return next((err))
    })
  },

  //taking a contactid and a message, datem  and adding it to the database
  addChat: (req, res, next) => {
    const { contactId } = req.params;
    const { message_text, date, rating} = req.body;
    const queryStr = `
    INSERT INTO notes (message_text, date, rating, contactId)
    VALUES ( '${message_text}', '${date}', '${rating}', '${contactId}');
    `
    contactDB.query(queryStr)
      .then((data) => {
        console.log('Successsfully added - ', data, ' note')
        res.locals.notes = data; 
        return next(); 
      }
      )
      .catch((err) => {
      return next((err))
    })
  },

  //taking a contactid and a messageid and deleting the message
  deleteChat: (req, res, next) => {
    const { contactId, messageId } = req.params;
    const queryStr = `
    DELETE FROM notes WHERE messageId = ${ messageId } AND contactId = '${ contactId }';
    `
    contactDB.query(queryStr)
      .then((data) => {
        console.log('Succesfully deleted - ', data, ' row(s)')
        res.locals.notes = data;
        return next();
      }
      )
      .catch((err) => {
      return next((err))
    })
  },
  //taking a contactid and a messageid and updating the message and rating
  updateChat: (req, res, next) => {
    const { contactId, messageId } = req.params;
    const {message_text, rating } = req.body;
    const queryStr = `
    UPDATE notes SET message_text = '${ message_text }', rating = '${ rating }' WHERE messageId = '${ messageId }' AND contactId = '${ contactId }';
    `
    contactDB.query(queryStr)
      .then((data) => {
        console.log('Succesfully updated - ', data, ' row(s)')
        res.locals.notes = data;
        return next();
      }
      )
      .catch((err) => {
      return next((err))
    })
  },
}




export default chatController;


