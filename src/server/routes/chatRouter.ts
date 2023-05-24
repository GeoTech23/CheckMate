import chatController from '../controllers/chatController.ts';
import {Router} from 'express'
const chatRouter = Router();


//Retrieve chat
chatRouter.get('/:userId/:contactId', chatController.getChat, (_req,res)=> {
  console.log('Listing all chats')
  return res.status(200).json(res.locals.chats)
})

//Adding chat
chatRouter.post('/:userId/:contactId', chatController.addChat, (_req,res)=> {
  console.log('added chat')
  return res.status(200).json(res.locals.chats)
})

//Delete chat
chatRouter.delete('/:userId/:contactId', chatController.deleteChat, (_req,res)=> {
  console.log('Deleted chat')
  return res.status(200).json(res.locals.chats)
})

//Update chat
chatRouter.patch('/:userId/:contactId', chatController.updateChat, (_req,res)=> {
  console.log('Updated chat')
  return res.status(200).json(res.locals.chats)
})


export default chatRouter;