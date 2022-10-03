const express = require('express')
const configs = require('./config')
const todosRoutes = require('./routes')
const app = express()

app.use(express.json())
app.use(todosRoutes)

app.listen(configs.app_port, () => {
    console.log(`Server runnig in port: ${configs.app_port}`)
})