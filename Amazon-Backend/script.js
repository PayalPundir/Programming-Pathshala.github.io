const express = require("express");
const productsRouter = require('./routes/productsRoutes.js');
const usersRouter = require('./routes/usersRoutes.js');
const reviewRouter = require('./routes/reviewRoutes.js');
const app= express();
const mongoose = require('mongoose');
const test = require('./models/prouctsModel.js');
const userData = require('./models/usersModels.js');
const reviewData = require('./models/reviewModels.js');


app.use(express.json());

app.use('/api/products', productsRouter); 
app.use('/api/products/:id', productsRouter); 
app.use('/api/users', usersRouter); 
app.use('/api/users/:id', usersRouter); 
app.use('/api/review', reviewRouter); 
app.use('/api/users/:id', reviewRouter); 









const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.pt9tedt.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0';
const databaseUSer = 'payalpundir48';
const databasePassword = 'Payal123';
const databaseName = 'Amazon-Backend';

let dblink = url.replace("$_USERNAME_$",databaseUSer);
dblink = dblink.replace("$_PASSWORD_$",databasePassword);
dblink = dblink.replace("$_DB_NAME_$",databaseName);


mongoose.connect(dblink )
  .then(() => console.log('Connected!'));


app.listen(1400,
    () => console.log('Connected start!'));