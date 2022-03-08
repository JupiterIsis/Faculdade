const Database = require("../db/config")

module.exports = {
    async create(req, res){
        const db = await Database()
        const password = req.body.password
        let roomId = ""
        let isRoom = true

        while (isRoom){
            
            // generate room number
            for (let i = 0; i < 6; i++){
                roomId += Math.floor(Math.random() * 10).toString()
            }
            
            // verify if roomId already exists
            const roomIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomIds.some(roomIdExists => roomIdExists === roomId)

            if(!isRoom){
                // insert room in db
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    "${password}"
                )`)
            }

        }

        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    async open(req,res){
        const roomId = req.params.room
        res.render("room", {roomId: roomId})
    }
}