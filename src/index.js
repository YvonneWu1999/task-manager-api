const express = require('express')
//we don't grab anything from that file, just ensure the file runs and mongoose connects to the db
require('./db/mongoose')
const jwt = require('jsonwebtoken')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT


//without middleware: new request -> run route handler
//with middleware : new request -> do something -> run route handler 

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

//parse incoming json to an object
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



