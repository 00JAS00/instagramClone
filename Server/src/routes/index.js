const {Router} = require('express')


const router = Router()

// router.use("/user", userRoutes)
// router.use("/posts", postRoutes)
// router.use("/comment", commentRoutes)
// router.use("/like", likeRoutes)
// router.use("/followers", followersRoutes)

const PostUser = require('../controllers/PostUser')
const createPost = require('../controllers/CreatePost')
const Login = require('../controllers/Login')

//get
router.get('/', Login)

//post
router.post('/createuser', PostUser)
router.post('/home', createPost)


module.exports = router