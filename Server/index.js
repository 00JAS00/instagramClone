const server = require('./src/app')

const port = process.env.PORT || 3001

//syncing all the the models at once

server.listen(port, ()=>{
    console.log(`server listening at port: ${port}`)
})