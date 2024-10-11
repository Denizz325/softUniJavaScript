import { Router } from 'express';

const homeController = Router();

homeController.get('/', async (req, res) => {
    res.render('home', {title: "Home page"});
});


export default homeController;