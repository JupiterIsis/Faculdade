const res = require("express/lib/response")

module.exports = {
    create(req, res){
        let roomId = 123423
        res.redirect(`/room/${roomId}`)
    }
}