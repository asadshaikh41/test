const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const InvioceDetails = sequelize.define('InvioceDetails', {
    InvoiceDetailsId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    invoiceIdr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "invioces",
            key: "invoiceId",
        }
    },
    itemIdr:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    itemHSNCode:{
      type:DataTypes.STRING,
      allowNull:true,  
    },
    itemGST:{
        type:DataTypes.STRING,
        allowNull:true,  
    },
    itemQuantity:{
        type:DataTypes.STRING,
        allowNull:true,  
    },
    itemRate:{
        type:DataTypes.STRING,
        allowNull:true,  
    },
    itemAmount:{
        type:DataTypes.STRING,
        allowNull:true,  
    },
    itemCGST:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    itemSGST:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    itemDiscount:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    itemTotal:{
        type:DataTypes.STRING,
        allowNull:true,
    }

})

module.exports=InvioceDetails;

