const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-errors')

const login = (req,res)=>{
    const {username,password} = req.body
    console.log(username,password);
    if (!username || !password){
        throw new CustomAPIError('Please provide username and password and try again',400)
    }
    // normally ID will be from DB, just for a demo
    const id= new Date().getDate()

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:'User Token created',token})
}

const dashboard = async (req,res) =>{
    //console.log(req.headers)
    const authHeader = req.headers.authorization

    //if no token provided and doesnt start with bearer
    if(!authHeader){
        throw new CustomAPIError('No token provided',401)
    }
    if(!authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('Not starting with Bearer',401)
    }

    // Split bearer and token - Split based on spaces and take second element
    const token = authHeader.split(' ')[1]

    // verify will take 2 inputs, token and secret key and decode the same. If token is expired or any errors, custom error 
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded)
        const luckyNumber = Math.floor(Math.random()*100)
        res.status(200).json({msg:`Hello, ${decoded.username}`,secret: `Here is your authorized data, your lucky number is ${luckyNumber} `})
    } catch (error) {
        throw new CustomAPIError('Not authorized to access this route',401)
    }

    // if(!authHeader || !authHeader.startsWith('Bearer ')){
    //     throw new CustomAPIError('No token provided or not starting with Bearer ',401)
    // }
}


module.exports = {
    login,
    dashboard,

}