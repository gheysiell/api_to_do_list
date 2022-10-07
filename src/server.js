const express = require('express')
const configs = require('./config')
var cors = require('cors')
const todosRoutes = require('./routes')
const app = express()

app.use(cors())
app.use(express.json())
app.use(todosRoutes)

app.listen(configs.app_port, () => {
    console.log(`Server runnig in port: ${configs.app_port}`)
})