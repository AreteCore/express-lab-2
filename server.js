const express = require("express")
const app = express()

app.listen(3000, () => {
    console.log("port 3000")
})

//http://localhost:3000/greeting/tom
app.get("/greeting/:name", function (req, res) {
    res.send(`What's up, ${req.params.name}?!`)
})

//http://localhost:3000/tip/100/10
app.get("/tip/:total/:tipPercentage", function (req, res) {
    res.send(`${parseInt(req.params.total * (parseInt(req.params.tipPercentage) / 100 + 1))}`)
})

app.get("/magic/:question", function (req, res) {
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
    let rand = Math.floor(Math.random()*20)
    res.send(`${req.params.question}<br>${responses[rand]}`)
})

//fibonacci
//A number is Fibonacci if and only if one or both of (5*n^2 + 4) or (5*n^2 – 4) is a perfect square
//http://localhost:3000/fibonacci/100
// This route will take one param, the number we will operate on.
app.get("/fibonacci/:num", function(req,res) {
    let num = parseInt(req.params.num)
    // If the number is a Fibonacci number print out "Very good. It is Fibonacci."
    if(Number.isInteger(Math.sqrt(5 * (num ** 2) + 4)) || Number.isInteger(Math.sqrt(5 * (num ** 2) - 4))) {
        res.send(`This is definitely a fibonacci number.`)
        // If the number param is not a fibonacci number, print out "I can tell this is not a fibonacci number."
    } else {
        res.send("This number is not a fibonacci number.")
    }
})

