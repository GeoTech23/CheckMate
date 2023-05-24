import express, { json, urlencoded } from 'express';
import { Request, Response } from 'express';
import chatRouter from './routes/chatRouter.ts';
import contactRouter from './routes/contactRouter.ts';
import authRouter from './routes/authRouter.ts'
import authController from './controllers/authController.ts'
import Twilio from 'twilio'
import { dirname } from 'path';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({path: path.resolve(dirname('./.env'))})

const app = express();
const PORT = 3000;


const envPath = path.resolve(__dirname, '.env');
dotenv.config({ path: envPath });




// Your Account SID, Subaccount SID Auth Token from console.twilio.com
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN 

console.log('data here', new Date())

console.log('accountSId', accountSid)

const client = Twilio(accountSid, authToken);
const numToMsg = process.env.NUMS
const twilioNum = process.env.TWILIO_NUM

function sendMessage() {

    client.messages.create({
      body: 'testingg',
      to:  numToMsg,
      from: twilioNum, // From a valid Twilio number
      // sendAt: new Date('2023-05-24T15:43:01+0000'),
      // scheduleType: 'fixed',
    })
    .then(message => console.log(message.status))

}

function scheduleMessage() {
  const now: Date = new Date();
  const nextSendTime: Date = new Date(now.getTime() + 2 * 60 * 1000); // Set the next send time 2 minutes later
  const timeOut: number = nextSendTime.getTime() - now.getTime();

  setTimeout(async () => {
    await sendMessage();
    scheduleMessage(); 
  }, timeOut);
}

// scheduleMessage(); 



// const client = Twilio(accountSid, authToken);
// client.messages
//   .create({
//     body: 'newMessage',
//     to: '+16465525220', // Text your number
//     from: '+18665615608', // From a valid Twilio number
//     sendAt: new Date('2023-05-24T15:43:01+0000'),
//     scheduleType: 'fixed',
//   })
//   .then((message) => console.log(message.sid));
  

app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/login', authRouter);
app.use('/chat', chatRouter);
app.use('/contact', contactRouter);

app.post('/signup', authController.createUser, (req: Request, res: Response) => {
	if (res.locals.user === true) {
    console.log(res.locals.user)
    return res.status(200).json(res.locals.user)
	} else {
    console.log(false)
    throw new Error
	}
})



//catch-all router handler
app.use('/', (_req: Request, res: Response) => {
	console.log('In catch-all route')
  res.status(404).send('Page Not Found')
});

//Global error handler
app.use((err: Error, _req: Request, res: Response) => {
	const defaultErr = {
		log: 'Global error handler',
		status: 500,
		message: { err: ' - An error occurred' },
	};
	const error = Object.assign({}, defaultErr, err);
	return res.status(error.status).json(error.message);
});

app.listen(PORT, () => console.log('server running ', PORT));
