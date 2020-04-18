const path = require('path');
const express = require('express')
const app = express()
const publicPath  = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath))  // server asseets from this directory

app.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, ()=>{
    console.log('server is running')
})