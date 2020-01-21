module.exports = (app) => {
    const message = require("../controllers/message.controller.js")

    //Get Messages
    app.get("/message", message.getMessage)
}