import { Router } from 'express';
import volcanoService from '../services/volcanoService.js';
import { getErrorMessage } from "../utils/errorUtils.js";
import { isAuth } from '../middlewares/authMiddleware.js';



const volcanoController = Router();


volcanoController.get('/create', isAuth, async (req, res) => {
    const volcanoTypeData = getVolcanoTypeViewData();
    res.render('volcanoes/create', {title: 'Create Page', volcanoTypes: volcanoTypeData});
});

volcanoController.post('/create', isAuth, async (req, res) => {
    const volcanoData = req.body;
    const ownerId = req.user?._id


    try {
        const volcano = await volcanoService.create(volcanoData, ownerId)
        res.redirect('/');

    } catch(err) {
        const error = getErrorMessage(err)
        const volcanoTypeData = getVolcanoTypeViewData(volcanoData.volcanoType)


        return res.render('volcanoes/create', {volcanoData, volcanoTypes: volcanoTypeData, error})
    }

});

volcanoController.get('/catalog', async (req, res) => {
    const volcanoes = await volcanoService.getAll();

    res.render('volcanoes/catalog', {title: 'Catalog Page', volcanoes})
});

volcanoController.get('/search', async (req, res) => {
    const query = req.query
    const volcanoes = await volcanoService.getAll(req.query)
    const volcanoTypes = getVolcanoTypeViewData(query.volcanoType)
    console.log(volcanoTypes)
    res.render('volcanoes/search', {title: 'Search Page', volcanoes, query, volcanoTypes})
});
 

volcanoController.get('/:volcanoId/details', async (req, res) => {
    const volcanoId = req.params.volcanoId;
    const volcano = await volcanoService.getOne(volcanoId);
    const isOwner = volcano.owner == req.user?._id;
    const isVoted = volcano.voteList.some(userId => userId == req.user?._id) ;
    const voteCount = volcano.voteList.length || 0;

    res.render('volcanoes/details', {title: 'Details Page', volcano, isOwner, isVoted, voteCount});
});

volcanoController.get('/:volcanoId/vote', isAuth, async (req, res) => {
    const volcanoId = req.params.volcanoId;
    const userId = req.user?._id

    if (isVolcanoOwner(volcanoId, userId)) {
        return res.redirect('/404')
    }

    try{
        await volcanoService.vote(volcanoId,userId)
        res.redirect(`/volcano/${volcanoId}/details`);
    }catch (err) {
        console.log(err)

    }

});

volcanoController.get('/:volcanoId/delete', isAuth,  async (req, res) => {
    const volcanoId = req.params.volcanoId

    if (!isVolcanoOwner(volcanoId, req.user._id)) {
        return res.redirect('/404')
    }


    try {

        await volcanoService.remove(volcanoId)
        res.redirect('/volcanoes/catalog')
    } catch(err) {
        console.log(err)
    }
});


volcanoController.get('/:volcanoId/edit', isAuth,  async (req, res) => {
    const volcanoId = req.params.volcanoId;
    const volcano = await volcanoService.getOne(volcanoId);
    const volcanoTypes = getVolcanoTypeViewData(volcano.volcanoType);

    const isOwner = volcano.owner == req.user?._id;

    if (!isOwner) {
        return res.redirect('/404');
    }


    res.render('volcanoes/edit', {title: 'Edit Page', volcano, volcanoTypes})
});


volcanoController.post('/:volcanoId/edit', isAuth,  async (req, res) => {
    const volcanoId = req.params.volcanoId;
    const newVolcanoData = req.body;

    if (!isVolcanoOwner(volcanoId, req.user._id)) {
        return res.redirect('/404');
    }

    try {
        await volcanoService.edit(volcanoId, newVolcanoData)
        res.redirect(`/volcano/${volcanoId}/details`)
    } catch(err) {
        const error = getErrorMessage(err)
        const volcanoTypes = getVolcanoTypeViewData(newVolcanoData.volcanoType);
        return res.render('volcanoes/edit', {title: 'Edit Page', volcano: newVolcanoData, volcanoTypes, error})
    }


});


function getVolcanoTypeViewData(typeVolcano) {
    const volcanoTypes = [
        'Supervolcanoes',
        'Submarine',
        'Subglacial',
        'Mud',
        'Stratovolcanoes',
        'Shield'
    ];


    const viewData =  volcanoTypes.map(type => ({ 
        value: type, 
        lable: type, 
        selected: typeVolcano === type ? 'selected' : ''
    }));

    return viewData
}

async function isVolcanoOwner(volcanoId, userId) {
    const volcano = await volcanoService.getOne(volcanoId);
    const isOwner = volcano.owner == userId;
    return isOwner;
}
export default volcanoController;