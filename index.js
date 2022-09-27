const express = require('express');
const fs = require('fs');
const products = require('./data/MOCK_DATA.json')
const app = express();

// Middleware Json
app.use(express.json());

// Assign Port
app.listen(5000,()=> console.log('server on port 5000'));
app.get('/',(req,resp)=> resp.send('node with Express'));

// Get Productos
app.get('/products',(req,resp)=>{
    const prod = require('./data/MOCK_DATA.json')
    return resp.json(prod);
});

// Get Products By Id
app.get("/products/:id", (req, res) => {
    const id = req.params.id
    const filterProducts = products.filter(item => item.id == id)
    if (filterProducts.length == 0) return res.status(204).json(filterProducts)
    res.status(200).json(filterProducts)
})

// Post Add
app.post("/products/add", (req, res) => {
    console.log(req.body);
    const newProd = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
    };
    if(!newProd.id) {
      res.sendStatus(400);
    }
    products.push(newProd);
    fs.writeFile("./data/MOCK_DATA.json", JSON.stringify(products), (err) => {
    });
    return res.json(newProd);
});

// Patch Edit
app.patch("/products/edit/:id",(req,res)=>{
    const id = req.params.id;
    console.log(id);
    products.filter((elem)=>{
      if (elem.id == id) {
        elem.name  = req.body.name
        elem.price = req.body.price
        console.log(elem)
       }
    });
    return res.json(products);
});

// Delete
app.delete("/products/delete/:id", (req, res) => {
    const id = req.params.id

    products.filter((item, index) => {
        if (item.id == id) {
            products.splice(index, 1)
        }
    })

    return res.send(products)

});