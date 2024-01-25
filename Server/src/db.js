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

module.exports = {
    User,
    Post,
    Comment,
    Like,
    Followers,
    conn: sequelize
}