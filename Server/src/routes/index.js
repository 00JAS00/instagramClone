const {Router} = require('express')

const postUser = require('../controllers/PostUser')


const router = Router()

//post
router.post('/users', postUser)


module.exports = router