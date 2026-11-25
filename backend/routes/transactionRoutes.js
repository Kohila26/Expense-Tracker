
const express = require("express");
const router = express.Router();

const Transaction = require("../models/Transaction");

// CREATE TRANSACTION
router.post("/", async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);

        res.status(201).json({
            message: "Transaction added successfully",
            transaction
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// GET ALL TRANSACTIONS
router.get("/", async (req, res) => {
    try {
        const transactions = await Transaction.find()
            .sort({ date: -1 });

        res.json(transactions);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// UPDATE TRANSACTION
router.put("/:id", async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!transaction) {
            return res.status(404).json({
                message: "Transaction not found"
            });
        }

        res.json({
            message: "Transaction updated successfully",
            transaction
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// DELETE TRANSACTION
router.delete("/:id", async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(
            req.params.id
        );

        if (!transaction) {
            return res.status(404).json({
                message: "Transaction not found"
            });
        }

        res.json({
            message: "Transaction deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

module.exports = router;
