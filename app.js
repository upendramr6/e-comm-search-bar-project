const express = require('express')
const app = express()
const Products = require('./productModel')
const port = 3000;


app.use(express.static('public'));

app.get('/search',async(req, res) =>{
    let data = await Products.find();
    const query =req.query.query.toLowerCase();
    let results = data.filter((item)=>{
        return item.name.toLowerCase().includes(query)
    });
    res.json(results)
    
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})