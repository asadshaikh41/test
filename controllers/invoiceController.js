const {Invoice}=require("../models");

exports.createInvoice=async (req,res)=>{
    try {
        const invoice=await Invoice.create(req.body);
        res.status(201).json({message:"Invoice created successfully",invoice})
    } catch (error) {
        res.status(400).json({message:"error",error})
    }
};

exports.getAllInvoice=async(req,res)=>{
    try {
        const invoice=await Invoice.findAll();
        res.status(201).json({message:"all invoice data fetched successfully",invoice:invoice})
    } catch (error) {
        res.status(400).json({message:"error",error})

    }
}

exports.InvoiceById=async(req,res)=>{
    try {
        const invoice=await Invoice.findByPk(req.params.id);
        res.status(201).json({message:"invoice by data fetched successfully",invoice:invoice})
        
    } catch (error) {
        res.status(400).json({message:"error",error})

    }
}

exports.updateInvoice=async(req,res)=>{
    try {
        const invoice=await Invoice.findByPk(req.params.id);
        if(!invoice){
            res.status(404).json({message:"Invoice not found"})
        }else{
            await invoice.update(req.body)
            res.status(201).json({message:"invoice updated successfully",invoice:invoice});       
        }
        
    } catch (error) {
        res.status(400).json({message:"error",error})
    }
}

exports.deleteInvoice=async(req,res)=>{
    try {
        const invoice=await Invoice.findByPk(req.params.id);
        if(!invoice){
            res.status(404).json({message:"Invoice not found"})
        }else{
            await invoice.destroy()
            res.status(201).json({message:"invoice Deleted successfully",invoice:invoice});       
        }
        
    } catch (error) {
        res.status(400).json({message:"error",error})
    }
}

