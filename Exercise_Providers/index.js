const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const routes = require('./routes/routesIndex');

dotenv.config();
// Middleware Json
app.use(express.json());
// Assign Port
app.listen(3000,()=> console.log(`server on port 3000`));

mongoose.connect(`mongodb+srv://mcga:mcga123@mcga.mqlbxqm.mongodb.net/test`)
  .then(() => {
    console.log("🟢 DB Connected");
  })
 .catch((err) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
}); 

app.use('/',routes);