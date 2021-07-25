import express from 'express'
import cors from 'cors'
import path from 'path'
const port = process.env.PORT || 8080;
const app = express()
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "/index.html"))
})
app.listen(port, ()=>`Server listeneing on PORT:${port}`)