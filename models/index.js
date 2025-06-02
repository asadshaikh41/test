const sequelize = require('../config/db');
const User = require('./usermodels');
const Invoice = require('./invoiceModel');
const InvoiceDetails = require('./invoiceDetailsModel');
const InvoicePayment = require("../models/invoicePaymentModel");

const initDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to MySQL database');
        await sequelize.sync();
        console.log('all models were synchronized.');
    } catch (error) {
        console.log('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, initDb, User, Invoice, InvoiceDetails, InvoicePayment };