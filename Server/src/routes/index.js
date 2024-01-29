const {Router} = require('express')


const router = Router()

router.use("/user", userRoutes)
router.use("/posts", postRoutes)
router.use("/comment", commentRoutes)
router.use("/like", likeRoutes)
router.use("/followers", followersRoutes)

const postUser = require('../controllers/PostUser')
//post
router.post('/users', postUser)


module.exports = router