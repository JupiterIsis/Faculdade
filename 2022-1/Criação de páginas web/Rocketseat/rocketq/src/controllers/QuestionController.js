module.exports = {
    index(req, res){
        const roomId = req.params.room
        const questionId = req.params.question
        const actions = req.params.action
        const password = req.body.password
        
        console.log(`room = ${roomId}, questionId = ${questionId}, actions = ${actions}, password = ${password}`)
    }
}