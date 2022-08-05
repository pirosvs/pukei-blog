const User = require('./User.js');
const BlogPost = require('./BlogPost.js');
const Comment = require('./Comment.js');

// user has many post
BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
});

BlogPost.hasOne(User, {
    foreignKey: 'user_id',
});
// post has one user

// post has many comments
Comment.belongsTo(BlogPost, {
    foreignKey: 'post_id',
});

BlogPost.hasMany(Comment, {
    foreignKey: 'post_id',
});

Comment.hasOne(BlogPost, {
    foreignKey: 'post_id',
});
// comments have one post?

// user has comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
});
// comments have one user
Comment.hasOne(User, {
    foreignKey: 'user_id',
});

module.exports = {
    User,
    BlogPost,
    Comment,
  };
  