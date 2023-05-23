import contactController from '../controllers/contactController.ts';
import {Router} from 'express'
const contactRouter = Router();


//Retrieve contact
contactRouter.get('/:userId', contactController.getContacts, (_req,res)=> {
  console.log('Listing all contacts for specified user')
  return res.status(200).json(res.locals.contacts)
})

//Adding contact
contactRouter.post('/:userId', contactController.addContact, (req,res)=> {
  console.log('Added contact')
  return res.status(200).json(res.locals.contacts)
})

// Delete contact
contactRouter.delete('/:userId/:contactId', contactController.deleteContact, (req,res)=> {
  console.log('Deleted contact')
  return res.status(200).json(res.locals.contacts)
})

//Update contact
// contactRouter.patch('/', contactController.updateContact, (req,res)=> {
//   console.log('Updated contact')
//   return res.status(200).json(res.locals.contacts)
// })


export default contactRouter;