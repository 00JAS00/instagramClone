require('dotenv').config()
const pg = require('pg')
const {Sequelize} = require('sequelize')
const fs = require('fs')
const path = require('path')

//models
const userModel = require('./models/User')

const {
    DB_USER, DB_PASSWORD, DB_HOST, POSTGRES_URL,
} = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/instagramclone`,
    {logging: false, native:false}
)

//executing models
userModel(sequelize)

//model and relations
const {User} = sequelize.models

module.exports = {
    User,
    conn: sequelize
}