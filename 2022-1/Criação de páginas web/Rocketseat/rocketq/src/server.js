const express = require("express")
const route = require("./route")

const server = express()

server.set('views', './views');
server.set('view engine', 'ejs');
server.engine('ejs', require('ejs').renderFile);


server.use(route)
server.listen(3000, () => console.log("RUNNING AT PORT 3000") )