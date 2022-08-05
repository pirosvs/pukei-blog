// login 
// routes for display

// -------NEED--------
// can get posts by id (display page taking the information needed)
// comments (need to be displayed with posts when existing)

const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Route to get the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
    //   attributes: { exclude: ['id', 'user_id', 'body'] },
    });

    const blogposts = blogPostData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get blog post by id when clicked (so long as user is logged in)
// when a title is clicked, need to grab span by id and make get request for this route, putting the span id as the id
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk(req.params.id);
        const blogPost = blogPostData.get({ plain: true });

        if (!blogPostData) {
          res.status(404).json({ message: 'No post found with this id!' });
          return;
        }

        const commentData = Comment.findAll({
            where: {post_id: blogPostData.id}
        });

        res.render('post');
        res.status(200).json(blogPostData);
      } catch (err) {
        res.status(400).json(err);
      }
});

// Should delete a given blogpost
router.delete('/post/:id', async (req, res) => {
    // Will comments be automatically deleted? Do I need to delete them before the post here
    try {
      const blogPostData = await BlogPost.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!blogPostData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(blogPostData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Route to display the login page -- directs to homepage if user is already logged in
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
