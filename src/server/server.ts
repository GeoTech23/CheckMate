import express, { json, urlencoded } from 'express';
import { Request, Response } from 'express';
import chatRouter from './routes/chatRouter.ts';
import contactRouter from './routes/contactRouter.ts';
import authRouter from './routes/authRouter.ts'
import authController from './controllers/authController.ts'

// import path from 'path';
const app = express();
const PORT = 3000;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/login', authRouter);
app.use('/chat', chatRouter);
app.use('/contact', contactRouter);

app.post('/signup', authController.createUser, (req: Request, res: Response) => {
	if (res.locals.user === true) {
	console.log(res.locals.user)
	} else {
	console.log(false)
	throw new Error
	}
})



//catch-all router handler
app.use('/', (_req: Request, res: Response) => {
	console.log('Page not found')
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
