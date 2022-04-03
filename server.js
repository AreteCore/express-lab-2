const express = require("express")
const app = express()

app.listen(3000, () => {
    console.log("port 3000")
})

//http://localhost:3000/greeting/tom
app.get("/greeting/:name", function(req,res) {
    res.send(`What's up, ${req.params.name}?!`)
})

//http://localhost:3000/tip/100/10
app.get("/tip/:total/:tipPercentage", function(req,res) {
    res.send(`${parseInt(req.params.total * (parseInt(req.params.tipPercentage)/100 + 1))}`)
})


