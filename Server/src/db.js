require('dotenv').config()
const pg = require('pg')
const {Sequelize} = require('sequelize')
const fs = require('fs')
const path = require('path')

//models
const userModel = require('./models/User')
const postModel = require('./models/Post')
const commentModel = require('./models/Comment')
const likeModel = require('./models/Like')
const followersModel = require('./models/Followers')

const {
    DB_USER, DB_PASSWORD, DB_HOST, POSTGRES_URL,
} = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/instagramclone`,
    {logging: false, native:false}
)

//executing models
userModel(sequelize)
postModel(sequelize)
commentModel(sequelize)
likeModel(sequelize)
followersModel(sequelize)

//model and relations
const {User, Post, Comment, Like, Followers} = sequelize.models

//1 relation between users and post
//user can have many post but one post belongs to one user
User.hasMany(Post)
Post.belongsTo(User)

//2- relation between Post and comments
// a post can have many comments, but a comment belongs to one post
Post.hasMany(Comment)
Comment.belongsTo(Post)

//3- relation between users and followers
// a user can have many followers and also follow many users
User.belongsToMany(User, {as: 'Followers',through:'userFollowers', foreignKey:'userId'})
User.belongsToMany(User, {as: 'Following', through: 'userFollowing', foreignKey:'followerId'})

//relation between posts and likes
//a post can have many likes, but 1 like belongs to one post
Post.hasMany(Like)
Like.belongsTo(Post)

module.exports = {
    User,
    Post,
    Comment,
    Like,
    Followers,
    conn: sequelize
}