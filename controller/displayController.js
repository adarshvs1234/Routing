const displayController = {
    a:async(req,res)=>{
        res.send("welcome")
     },
    b:async(req,res)=>{

        res.send(`number is saved and the number is ${req.number}`)
        throw new Error()
    },
    c:async(req,res)=>{
        console.log(req);
        
      res.send(`Showing  sample page and the added number is ${req.number}`)
    }
}
    
module.exports = displayController
