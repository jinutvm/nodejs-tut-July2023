const CustomAPIError = require('../errors/custom-errors')
const errorHandlerMiddleware = (err,req,res,next)=>{
    if (err instanceof CustomAPIError){
        console.log(err.statusCode, err.message);
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).send('Something went wrong, Try again later')
}

module.exports = errorHandlerMiddleware