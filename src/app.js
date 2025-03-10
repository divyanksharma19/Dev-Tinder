const express  = require("express")
const app = express();

app.use("/helo",(req,res)=>{
    res.send("hemlo ji");
})

app.listen(5555,()=>{
console.log("listening on port 5555")
})