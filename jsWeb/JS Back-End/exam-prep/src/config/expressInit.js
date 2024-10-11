import express from 'express';
import cookieParser from 'cookie-parser';
import { authMiddleware } from '../middleWares/authMiddleware.js';

export default function expressInit(app) {
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser())
    app.use('/static', express.static('src/public'));
    app.use(authMiddleware);

};