import chatController from '../controllers/chatController.ts';
import {Router} from 'express'
const chatRouter = Router();


//Retrieve chat
chatRouter.get('/:id', chatController.getChat, (_req,res)=> {
  console.log('Listing all chats')
  return res.status(200).json(res.locals.chats)
})

//Adding chat
chatRouter.post('/:id', chatController.addChat, (_req,res)=> {
  console.log('added chat')
  return res.status(200).json(res.locals.chats)
})

//Delete chat
chatRouter.delete('/:id', chatController.deleteChat, (_req,res)=> {
  console.log('Deleted chat')
  return res.status(200).json(res.locals.chats)
})

//Update chat
chatRouter.patch('/:id', chatController.updateChat, (_req,res)=> {
  console.log('Updated chat')
  return res.status(200).json(res.locals.chats)
})


export default chatRouter;