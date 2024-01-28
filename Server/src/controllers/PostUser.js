const {User} = require('../db')

const postUser = async(req,res)=>{
    try {
        const {username,email, password} = req.body
        if(!email || password || username) return res.status(400).send("Empty inputs")

        const newUser = await User.findOrCreate({
            where: {
                email, 
                password,
                username
            }
        })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postUser