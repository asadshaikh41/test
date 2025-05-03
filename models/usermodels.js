// const { DataTypes } = require("sequelize");

// module.exports = (sequelize) => {
//   const Invoice = sequelize.define(
//     'Invoice',
//     {
//       invoiceId: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       invoice_Number: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       invoice_Date: {
//         type: DataTypes.DATEONLY,
//         allowNull: true,
//       },
//       invoice_DueDate: {
//         type: DataTypes.DATEONLY,
//         allowNull: true,
//       },
//       invoice_Sgst: {
//         type: DataTypes.DECIMAL(10, 2),
//         allowNull: false,
//       },
//       invoice_Cgst: {
//         type: DataTypes.DECIMAL(10, 2),
//         allowNull: false,
//       },
//       invoice_Amount: {
//         type: DataTypes.DECIMAL(10, 2),
//         allowNull: false,
//       },
//       invoice_Discount: {
//         type: DataTypes.DECIMAL(10, 2),
//         allowNull: false,
//       },
//       invoice_Total: {
//         type: DataTypes.DECIMAL(10, 2),
//         allowNull: false,
//       },
//       BilltoName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       BilltoMobNo: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       BilltoEmail: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       BilltoGstIn: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       BilltoPan: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       BilltoAddress: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       BilltoCity: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       BilltoState: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       BilltoCountry: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       BilltoZip: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       BilltoWhatsappNo: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       currencyAddGst: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       isActive: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true,
//       },
//       createdBy: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       updatedBy: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//     },
//     {
//       timestamps: true,         // adds createdAt and updatedAt
//       underscored: true,        // maps camelCase fields to snake_case columns
//       tableName: 'invoice',     // explicit table name
//     }
//   );

//   return Invoice;
// };


const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = User;
