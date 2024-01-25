const server = require('./src/app')
const {conn} = require('./src/db')

const port = process.env.PORT || 3001

//syncing all the the models at once

conn.sync({force:true}).then(()=>{
    server.listen(port, ()=>{
        console.log(`server listening at port: ${port}`)
    })
})