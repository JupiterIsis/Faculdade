const express = require("express")
const route = require("./route")

const server = express()


server.use(route)
server.listen(3000, () => console.log("RUNNING AT PORT 3000") )