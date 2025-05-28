const express=require("express");
const router=express.Router();
const InvoiceDetails=require("../controllers/invoiceDetaillsController");

router.post('/create-details',InvoiceDetails.createInvoiceDetails);
router.get("/all-details",InvoiceDetails.readAllInvoiceDetails);
router.get("/:id",InvoiceDetails.InvoiceDetailsById);
router.get('/invoice/:invId', InvoiceDetails.getByInvoiceId)
router.put("/:id",InvoiceDetails.updateInvoiceDetails);
router.delete("/:id",InvoiceDetails.deleteInvoiceDetails);
router.post('/upsert', InvoiceDetails.upsertInvoiceDetails);

module.exports=router