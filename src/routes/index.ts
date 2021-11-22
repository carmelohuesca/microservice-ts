import * as express from 'express';
import * as users from './items';

export const register = (app: express.Application) => {
	app.get('/', (req: any, res) => res.send({ msg: 'service started!' }));
	users.register(app);
};
