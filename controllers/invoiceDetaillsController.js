const {InvoiceDetails}=require("../models");
const {Invoice}=require('../models')

exports.createInvoiceDetails = async (req, res) => {
  try {
    const { invoiceIdr, itemIdr } = req.body;
    
    // Check if invoice exists
    const invoice = await Invoice.findByPk(invoiceIdr);
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not available, invalid invoice id" });
    }

    // Check if this item already exists in this invoice
    const existingDetail = await InvoiceDetails.findOne({
      where: {
        invoiceIdr: invoiceIdr,
        itemIdr: itemIdr
      }
    });

    if (existingDetail) {
      return res.status(400).json({ 
        message: "This item already exists in this invoice",
        existingDetail: existingDetail
      });
    }

    // If no duplicate found, create the new invoice detail
    const invoicedetails = await InvoiceDetails.create(req.body);
    res.status(201).json({
      message: "Invoice details created successfully",
      invoicedetails
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating invoice details", error });
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

exports.getByInvoiceId=async(req,res)=>{
  try{
        const { invId } = req.params;
        const invoices = await InvoiceDetails.findAll({ where: { invoiceIdr: invId } })
        res.status(200).json({ message: 'All invoice details of invoice fetched successfully', data: invoices })
  }catch(error){
     console.log(error)
   res.status(500).json({message:"error",error})
  }
}
// exports.updateInvoiceDetails=async(req,res)=>{
//   try {
//    const invoicedetails=await InvoiceDetails.findByPk(req.params.id);
//    if(!invoicedetails){
//     res.status(404).json({message:"Invoicedetails not found"})
//    }else{
//     await invoicedetails.update(req.body)
//     res.status(200).json({message:"invoice Details updated successfully",invoicedetails})
//    }
   
//   } catch (error) {
//    console.log(error)
//    res.status(500).json({message:"error",error})
//   }
// }

exports.updateInvoiceDetails = async (req, res) => {
  try {
    const { invoiceIdr, itemIdr } = req.body;
    const invoiceDetailId = req.params.id;

    // Find the existing invoice detail
    const invoicedetails = await InvoiceDetails.findByPk(invoiceDetailId);
    
    if (!invoicedetails) {
      return res.status(404).json({ message: "Invoice details not found" });
    }

    // If itemIdr is being updated, check for duplicates
    if (itemIdr && itemIdr !== invoicedetails.itemIdr) {
      const existingDetail = await InvoiceDetails.findOne({
        where: {
          invoiceIdr: invoiceIdr || invoicedetails.invoiceIdr,
          itemIdr: itemIdr
        }
      });

      if (existingDetail && existingDetail.InvoiceDetailsId !== invoiceDetailId) {
        return res.status(400).json({ 
          message: "This item already exists in this invoice",
          existingDetail: existingDetail
        });
      }
    }

    // Update the invoice detail
    await invoicedetails.update(req.body);
    
    res.status(200).json({
      message: "Invoice Details updated successfully",
      invoicedetails
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating invoice details", error });
  }
}

exports.upsertInvoiceDetails = async (req, res) => {
  try {
    const { invoiceIdr, itemIdr } = req.body;
    const whereCondition = { invoiceIdr, itemIdr };

    // Check if invoice exists
    const invoice = await Invoice.findByPk(invoiceIdr);
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not available, invalid invoice id" });
    }

    // Check if an invoice detail with this invoiceIdr and itemIdr already exists
    const existingDetail = await InvoiceDetails.findOne({ where: whereCondition });

    if (existingDetail) {
      // Update the existing record
      const updatedDetail = await existingDetail.update(req.body);
      return res.status(200).json({
        message: "Invoice details updated successfully",
        invoicedetails: updatedDetail,
        wasCreated: false
      });
    } else {
      // Create new record
      const newDetail = await InvoiceDetails.create(req.body);
      return res.status(201).json({
        message: "Invoice details created successfully",
        invoicedetails: newDetail,
        wasCreated: true
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      message: "Error upserting invoice details",
      error: error.message 
    });
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