const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const  SERVER_PORT = app.listen(4004, () => console.log(`server jamming on 4004`))