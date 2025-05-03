const express=require("express");
const router=express.Router();
const Invoice=require("../controllers/invoiceController");

router.post("/create",Invoice.createInvoice);
router.get("/all",Invoice.getAllInvoice);
router.get("/:id",Invoice.InvoiceById);
router.put("/:id",Invoice.updateInvoice);
router.delete("/:id",Invoice.deleteInvoice);

module.exports=router;