require('dotenv.config').config
const pg = require('pg')
const {Sequelize} = require('sequelize')
const fs = require('fs')
const path = require('path')

const {
    DB_USER, DB_PASSWORD, DB_HOST, POSTGRES_URL,
  } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/instagramclone`,
    {logging: false, native:false}
)