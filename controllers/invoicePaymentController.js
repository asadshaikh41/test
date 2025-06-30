const { InvoicePayment } = require("../models");

exports.createInvoicePayment = async (req, res) => {
    try {
        await InvoicePayment.create(req.body);
        res.status(201).json({ message: 'Invoice payment done successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error })
    }
}

exports.getAllInvoicePayment = async (req, res) => {
    try {
        const allPayments = await InvoicePayment.findAll();

        if (allPayments.length <= 0) {
            return res.status(404).json({ message: 'No payment found' });
        }
        res.status(200).json({ message: 'All invoice payment fetched successfully ', data: allPayments });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error })
    }
}

exports.getInvoicePaymentById = async (req, res) => {
    try {
        const invoicePaymentById = await InvoicePayment.findByPk(req.params.id);
        if (!invoicePaymentById) {
            return res.status(404).json({ message: 'No payment found' });
        }
        res.status(200).json({ message: 'Invoice payment fetched successfully ', data: invoicePaymentById });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error })
    }
}

exports.getInvoicePayment = async (req, res) => {
    try {
        const { invId } = req.params;
        const invoices = await InvoicePayment.findAll({ where: { invoiceIdr: invId } })
        res.status(200).json({ message: 'All payment details of invoice fetched successfully', data: invoices })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error })
    }
}

exports.updateInvoicePayment = async (req, res) => {
    try {
        const invoicePayment = await InvoicePayment.findByPk(req.params.id);

        if (!invoicePayment) {
            res.status(404).json({ message: "invoice payment not found" })
        } else {
            await invoicePayment.update(req.body)
            res.status(200).json({ message: "Invoice payment updated successfully", invoicePayment })
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error })
    }
}

exports.deleteInvoicePayment = async (req, res) => {
    try {
        const invoicePayment = await InvoicePayment.findByPk(req.params.id);

        if (!invoicePayment) {
            res.status(404).json({ message: "invoice payment not found" })
        } else {
            await invoicePayment.destroy()
            res.status(200).json({ message: "Invoice payment deleted successfully", invoicePayment })
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error })
    }
}