import { Request, Response, NextFunction } from 'express';
import contactDB from '../models/contactModel.ts';
// import { Request, Response, NextFunction } from 'express';

const contactController = {
	//taking a userid and returning all the contacts associated with that user
	getContacts: (req: Request, res: Response, next: NextFunction) => {
		console.log('made it to getContacts middleware');
		const { userId } = res.locals.user;
		const queryStr = `
    SELECT * FROM contacts WHERE userid = '${userId}';
    `;
		//this query returns the contacts associated with the user
		contactDB
			.query(queryStr)
			.then((data) => {
				console.log('data here', data.rows);
				res.locals.contacts = data.rows;
				res.locals.userId = userId;
				return next();
			})
			.catch((err: Error) => {
				return next(err);
			});
	},

	//taking a contactid and returning all the messages associated with that contact
	deleteContact: (req: Request, res: Response, next: NextFunction) => {
		const { userId, contactId } = req.params;
		const queryStr1 = `
    DELETE FROM notes WHERE contactid = ${contactId} AND userid = '${userId}'; 
    `;
		const queryStr2 = `
    DELETE FROM contacts WHERE contactid = ${contactId} AND userid = '${userId}'; 
    `;
		//this query returns the number of deleted rows
		contactDB
			.query(queryStr1)
			.then((data) => {
				console.log('Succesfully deleted - ', data.rowCount, ' row(s)');
				res.locals.contacts = data.rowCount;
				return next();
			})
			.catch((err: Error) => {
				return next(err);
			});
	},

	//taking a contactid and a message, datem  and adding it to the database
	addContact: (req: Request, res: Response, next: NextFunction) => {
		const { userId } = req.params;
		const { firstName, lastName, birthday, phoneNumber, days_before_reminder, relationship} =
			req.body;
		const queryStr = `
    INSERT INTO contacts (firstname, lastname, birthday, phonenumber, days_before_reminder, userId, relation)
    VALUES ('${firstName}', '${lastName}', '${birthday}', '${phoneNumber}', ${days_before_reminder}, '${userId}', '${relationship}');
    `;
		//this query returns number of rows added
		contactDB
			.query(queryStr)
			.then((data) => {
				console.log('Successsfully added - ', data.rowCount, ' contact');
				res.locals.contacts = data.rowCount;
				return next();
			})
			.catch((err: Error) => {
				return next(err);
			});
	},
};

export default contactController;
