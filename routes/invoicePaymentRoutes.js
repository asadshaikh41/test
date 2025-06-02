const express = require("express");

const router = express.Router();

const { createInvoicePayment, getAllInvoicePayment, getInvoicePayment, getInvoicePaymentById, updateInvoicePayment, deleteInvoicePayment } = require("../controllers/invoicePaymentController");

router.post("/create-inv-payment", createInvoicePayment);
router.get("/get-all-inv-payment", getAllInvoicePayment);
router.get("/get-inv-payment-details-by-id/:id", getInvoicePaymentById);
router.get("/get-inv-payment-details/:invId", getInvoicePayment);
router.put("/update-inv-payment", updateInvoicePayment);
router.delete("/delete-inv-payment", deleteInvoicePayment);

module.exports = router