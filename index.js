const express = require('express')
const app = express()
const port = 3001;

app.get('/',(req,res)=>{
    res.status(403).send("Hayoo, Mau Cari apa bang :D");
})
app.get('/product',(req,res)=>{
    let product = {
        statusCode : 200,
        message:"Request Data Successfully",
        data:{
            product:[
                {name:"Pou",desc:"Classic Game",category:"Classic"},
                {name:"Mobile Legend",desc:"Moba Game",category:"Moba"},
                {name:"AOV",desc:"Moba Game tap tap",category:"Moba"},
            ]
        }};
    
    res.status(200).send(JSON.parse(JSON.stringify(product)))
})

app.listen(port, ()=>{
    console.log("API Listening at http://localhost:"+port);
})