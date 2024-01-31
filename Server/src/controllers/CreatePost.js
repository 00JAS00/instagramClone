const {Post} = require('../db')

const createPost = async (req,res)=>{
    try {
        const {description, image, UserId} = req.body
        if(!description) return res.status(400).send("description not provided")
        if(!UserId) return res.status(400).send("User id not recieved")

        const newPost = await Post.create({
            description,
            image, 
            UserId: UserId
        })

        res.status(200).json(newPost)
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = createPost