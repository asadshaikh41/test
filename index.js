// const express=require("express");
// require('dotenv').config();
// const userrouter=require("./routes/userRoutes");


// const app=express();

// app.use(express.json());

// app.use('/user', userrouter)

// const PORT=process.env.PORT || 5000;

// app.listen(PORT,()=>{
//     console.log(`the server is running on ${PORT}`)
// })

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { initDb } = require('./models');
const userRoutes = require('./routes/userRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes')
const invoiceDetailsRoutes = require('./routes/invoiceDetailsRoutes')
const dotenv = require("dotenv")
const invoicePaymentRoutes = require("./routes/invoicePaymentRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/invoice', invoiceRoutes);
app.use('/invoicedetails', invoiceDetailsRoutes)
app.use('/invoice-payment', invoicePaymentRoutes)
dotenv.config()

initDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Server is running on port 5000');
  });
});
