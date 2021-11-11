const router = require('express').Router();
const postService = require('../services/projectService')

router.get('/', async (req, res) => {
    let posts = await postService.getAll();
    res.render('home', { posts });
});

router.get('/all-posts', async (req, res) => {
    let posts = await postService.getAll();
    res.render('all-posts', { posts });
}); 

module.exports = router;