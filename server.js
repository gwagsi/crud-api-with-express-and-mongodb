const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})



mongoose.connect("mongodb+srv://root:243243243@cluster0.ukgpppk.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Connected to database successfully")    
app.listen(port, () => {
        console.log(`App listening on port ${port}`)
      })
    
})
.catch((console.error()));
