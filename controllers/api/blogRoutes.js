// get blog by user id -- in the dashboard?? where is this even done
// get comments taking blog post id

const router = require("../homeRoutes");

router.get('/blog', async (req, res) => {
    
});

// Should get all comments related to a given blogpost
router.get('/comment', async (req, res) => {
    const commentData = Comment.findAll({
        where: {post_id: blogPostData.id}
    });
});

// Should delete a selected comment
router.delete('/comment/:id', async (req, res) => {
   try {
    const commentData = Comment.destroy({
        where: {id: req.params.id}
    });
    if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
    }
  
    res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
});