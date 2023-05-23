import express, { json, urlencoded } from 'express';
import { Request, Response } from 'express';
import chatRouter from './routes/chatRouter.ts';
import contactRouter from './routes/contactRouter.ts';
// import path from 'path';
const app = express();
const PORT = 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/chat', chatRouter);
app.use('/contact', contactRouter);

//catch-all router handler

app.get('/api/test', (_req: Request, res: Response) => {
	console.log('route hit');
	res.send('get route works');
});

//Global error handler
app.use('/', (_req: Request, res: Response) => {
	console.log('server');
	res.status(404).send('Page not found');
});
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
