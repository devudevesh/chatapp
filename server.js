const express = require('express') 
const bodyparser = require('body-parser')
const app = express()

var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname))

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

require("./routes/message.route")(app)

io.on('connection', (socket)=> {
    console.log('A New Client Connected...')
})

var server = http.listen(3000, () => {
    console.log("Server is running on port " + server.address().port)
})