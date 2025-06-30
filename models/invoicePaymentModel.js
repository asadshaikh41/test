const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const InvoicePayment = sequelize.define('invoice_payment', {
    invoice_payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    invoice_idr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "invioces",
            key: "invoiceId",
        }
    },
    is_pending_amt:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    payment_status:{
        type:DataTypes.ENUM("Unpaid", "Remaining", "Paid"),
        defaultValue: "Unpaid",
    },
    payment_method:{
       type:DataTypes.ENUM("Cash", "Upi", "Debit", "Credit"),
        defaultValue: "Cash",
    },
    invoice_total_amt: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    payment_amt_paid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
     payment_amt_remaining:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

    user_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    user_address:{
        type:DataTypes.STRING,
        allowNull:false
    },
     user_mobile_no:{
        type:DataTypes.STRING,
        allowNull:false
    },
     user_email:{
        type:DataTypes.STRING,
        allowNull:false
     },
      upi_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  upi_app: {
    type: DataTypes.ENUM("GooglePay", "PhonePe", "Paytm", "BHIM"),
    allowNull: true,
  },

  // Debit Card specific
  Debit_card_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Debit_card_holder_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Debit_card_expiry: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  // Credit Card specific
  Credit_card_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Credit_card_holder_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Credit_card_expiry: {
    type: DataTypes.STRING,
    allowNull: true,
  },
   
    
},{
  tableName: 'invoice_payments',
  timestamps: true,
}

)
module.exports = InvoicePayment