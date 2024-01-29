const {Router} = require('express')
const router = Router()

router.use("/user", userRoutes)
router.use("/posts", postRoutes)
router.use("/comment", commentRoutes)
router.use("/like", likeRoutes)
router.use("/followers", followersRoutes)



module.exports = router