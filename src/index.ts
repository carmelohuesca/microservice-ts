import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import * as fs from 'fs';
import morgan from 'morgan';
import path from 'path';
import * as routes from './routes';
import { Cors } from './server/cors';

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(Cors.init);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('common', {
		stream: fs.createWriteStream('./logs.log', { flags: 'a' })
	}));
	app.use(morgan('dev'));
}

app.use(express.static(path.join(__dirname, 'public')));
routes.register(app);

app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
