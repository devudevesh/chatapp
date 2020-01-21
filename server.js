const express = require('express') 
const app = express()

app.use(express.static(__dirname))

require("./routes/message.route")(app)

var server = app.listen(3000, () => {
    console.log("Server is running on port " + server.address().port)
})