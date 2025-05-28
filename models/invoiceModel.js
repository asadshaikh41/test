const { DataTypes, NUMBER } = require('sequelize');
const sequelize = require('../config/db');

const Invioce = sequelize.define('Invioce', {
    invoiceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    invoice_Number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    invoice_Date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    invoice_DueDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    invoice_Sgst: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    invoice_Cgst: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    invoice_Amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
      invoice_Percentage_Discount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    invoice_Discount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    invoice_Total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    BilltoName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BilltoMobNo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BilltoEmail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BilltoGstIn: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BilltoPan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BilltoAddress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BilltoCity: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BilltoState: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BilltoCountry: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BilltoZip: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BilltoWhatsappNo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    currency:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    AddGst: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    hospitalIDR:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    hospitalGroupIDR:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    createdBy: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    updatedBy: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Invioce;