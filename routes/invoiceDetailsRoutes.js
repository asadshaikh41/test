const express=require("express");
const router=express.Router();
const InvoiceDetails=require("../controllers/invoiceDetaillsController");

router.post('/create-details',InvoiceDetails.createInvoiceDetails);
router.get("/all-details",InvoiceDetails.readAllInvoiceDetails);
router.get("/:id",InvoiceDetails.InvoiceDetailsById);
router.put("/:id",InvoiceDetails.updateInvoiceDetails);
router.delete("/:id",InvoiceDetails.deleteInvoiceDetails);

module.exports=router