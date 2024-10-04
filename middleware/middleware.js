function middleware(error,req,res,next){
    error.stack
    let value = parseInt(num1)+parseInt(num2)
    if(value){
        req.number=value
        next()
    }else{
        res.send("No value Found")
    }
}
module.exports = middleware