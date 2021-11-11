const router = require('express').Router();

const postService = require('../services/projectService');

const { isAuth } = require('../middlewares/authMiddleware');
const { isOwn } = require('../middlewares/projectMiddleware');

router.get('/create', isAuth, (req, res) => {
    res.render('post/create');
});

router.post ('/create', isAuth, async (req, res)  => {
    let {title, keyword, location, dateCreated, imageUrl, description} = req.body;

    try { 
        await postService.create( title, keyword, location, dateCreated, imageUrl, description, req.user._id, req.params.postId );
        res.redirect('/');
    } catch (error) { 
        let post = await postService.getOne(req.params.postId);
        res.render(`post/create`, {...post, error: error.message});
    }

});

router.get('/:postId/details', async (req, res) => {
    let post = await postService.getOne(req.params.postId);

    let isOwn = req.user?._id == post.author;

    let hasVoted = post.votes.some(x => x._id == req.user?._id);

    res.render('post/details', {...post, isOwn, hasVoted})
});

router.get('/:postId/edit', isAuth, async(req, res) => {

    let post = await postService.getOne(req.params.postId);

    res.render('post/edit', {...post});
});

router.post('/:postId/edit',isAuth, async(req, res) => {
    try{
        let {title, keyword, location, dateCreated, imageUrl, description, votes, rating} = req.body;

        let postId = req.params.postId;
        await postService.updateOne(postId, {title, keyword, location, dateCreated, imageUrl, description, votes, rating});
        res.redirect(`/post/${req.params.postId}/details`);
        
    }catch(error) {
        let post = await postService.getOne(req.params.postId);
        res.render('post/edit', {...post, error: error.message});
    }

});

router.get('/:postId/delete', isAuth, isOwn, async(req, res) => {
    try{
        await postService.deleteOne(req.params.postId);
        res.redirect('/');

    }catch(error) {
        res.render('post/details', {error: error.message});
    }
});


module.exports = router;