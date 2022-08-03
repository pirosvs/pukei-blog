const User = require('./User.js');
const BlogPost = require('./BlogPost.js');
const Comment = require('./Comment.js');

// user has many post
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.hasOne(User, {
    foreignKey: 'user_id',
});
// post has one user

// post has many comments
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

Comment.hasOne(Post, {
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
  