const {User} =  require('../db')

const Login = async (req,res)=>{
    try {
        const {email, password} = req.query
        if(!email || !password) return res.status(400).send("Email or password not recieved")

        const user = await User.findOne({
            where: {
                email
            }
        })
        if(!user) return res.status(400).send("User not found")
        return user.password === password 
        ? res.status(200).json({access: true}) 
        : res.status(404).send("wrong password")
   
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = Login