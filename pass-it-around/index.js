// 99 bottles starts on line 12
// 99 bugs starts on line 34
// fibonacci starts on line x

const express = require("express")
const app = express()

app.listen(3000, () => {
    console.log("port 3000")
})

// // bottles

// app.get("/", function (req, res) {
//     res.send(`99 bottles of beer on the wall
//     <br>
//     <a href="http://localhost:3000/98">take one down</a>`)
// })

// app.get("/:bottles", function (req, res) {
//     //     If there are 0 bottles left, do not show a link to "take one down"
//     // Add a link to start over, which directs the user back to the home page.
//     if (req.params.bottles - 1 === 0) {
//     res.send(`${req.params.bottles} bottle of beer on the wall
//     <br>
//     <a href="http://localhost:3000/">Take it down and start over.</a>`)
//     } else {
//     res.send(`${req.params.bottles} bottles of beer on the wall
//     <br>
//     <a href="http://localhost:3000/${req.params.bottles - 1}">take one down</a>`)
//     }
// })

// //bugs

// app.get("/", function (req, res) {
//     res.send(`99 little bugs in the code<br>
//     99 little bugs<br>
//     Take one down<br>
//     Patch it around<br>
//     <a href="http://localhost:3000/98"> itty bitty bugs in the code</a>`)
// })

// app.get("/:bugs", function (req, res) {
//     // Make the bugs go down by one, but then have some sort 
//     // of functionality where the bug count can randomly go up
//     if (parseInt(req.params.bugs) === 0) {
//         res.send(`YOU ARE A CODING GOD!<br>
//         You have no bugs left!
//         <br>
//         <a href="http://localhost:3000/">Squash the itty bitty bugs in the code</a>`)
//     } else if (Math.random() < .02) {
//         const intern = parseInt(req.params.bugs) + (Math.floor(Math.random() * 45))
//         res.send(`OH NOES THE INTERN PUSHED TO PRODUCTION!<br>
//         You had only ${req.params.bugs}, but now there's ${intern} little bugs in the code!!!!!!<br>
//         ${intern} little bugs<br>
//         Take one down<br>
//         Patch it around<br>
//         <a href="http://localhost:3000/${intern}">Murder the intern quietly with a stapler.</a>`)
//     } else {
//         res.send(`${req.params.bugs} little bugs in the code<br>
//         ${req.params.bugs} little bugs<br>
//         Take one down<br>
//         Patch it around<br>
//         <a href="http://localhost:3000/${req.params.bugs - 1}">Squash the itty bitty bugs in the code</a>`)
//     }
// })

