import express from 'express';
import { ItemsController } from './items.controller';
export const register = (app: express.Application) => {
    app.get('/items', ItemsController.list);
    app.get('/items/:id', ItemsController.detail);
    return app;
};
