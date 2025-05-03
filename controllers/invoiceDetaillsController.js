const {InvoiceDetails}=require("../models");
const {Invoice}=require('../models')

exports.createInvoiceDetails=async(req,res)=>{
  try {

    const {invoiceIdr}=req.body;
    
    const invoice = await Invoice.findByPk(invoiceIdr);

    if(!invoice){
return res.status(404).json({message:"invoice not available, invalid invoice id"})
    }

    const invoicedetails=await InvoiceDetails.create(req.body);
    res.status(201).json({message:"invoice detaills created successfully",invoicedetails})
    
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"error",error})
  }
}

exports.readAllInvoiceDetails=async(req,res)=>{
   try {
    const invoicedetails=await InvoiceDetails.findAll();
    res.status(200).json({message:"Fetched all invoice Details",invoicedetails})
    
   } catch (error) {
    console.log(error)
    res.status(500).json({message:"error",error})
   }
}

exports.InvoiceDetailsById=async(req,res)=>{
  try {
   const invoicedetails=await InvoiceDetails.findByPk(req.params.id);
   res.status(200).json({message:"Fetched by id invoice Details",invoicedetails})
   
  } catch (error) {
   console.log(error)
   res.status(500).json({message:"error",error})
  }
}
exports.updateInvoiceDetails=async(req,res)=>{
  try {
   const invoicedetails=await InvoiceDetails.findByPk(req.params.id);
   if(!invoicedetails){
    res.status(404).json({message:"Invoicedetails not found"})
   }else{
    await invoicedetails.update(req.body)
    res.status(200).json({message:"invoice Details updated successfully",invoicedetails})
   }
   
  } catch (error) {
   console.log(error)
   res.status(500).json({message:"error",error})
  }
}

exports.deleteInvoiceDetails=async(req,res)=>{
  try {
   const invoicedetails=await InvoiceDetails.findByPk(req.params.id);
   if(!invoicedetails){
    res.status(404).json({message:"Invoicedetails not found"})
   }else{
   await invoicedetails.destroy()
    res.status(200).json({message:"invoice Details deleted successfully",invoicedetails})
   }
   
  } catch (error) {
   console.log(error)
   res.status(500).json({message:"error",error})
  }
}