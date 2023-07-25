const errorHandlerMiddleware = (err,req,res,next) => {
    // return res.status(500).json({msg:err})
    // return res.status(500).json({msg: 'Something went wrong. Try again!!!'})
    err.status = err.status || 500
    return res.status(err.status).json({msg: err.message})
}

module.exports = errorHandlerMiddleware;