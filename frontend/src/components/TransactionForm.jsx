
import { useState, useEffect } from "react";

function TransactionForm({
    onAdd,
    editingId,
    selectedTransaction,
    onCancel
}) {

    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        type: "income",
        category: "",
        date: new Date().toISOString().slice(0, 10),
        description: ""
    });

    // STEP 1: Load selected transaction details into the form
    useEffect(() => {

        if (selectedTransaction) {

            setFormData({
                title: selectedTransaction.title || "",
                amount: selectedTransaction.amount || "",
                type: selectedTransaction.type || "income",
                category: selectedTransaction.category || "",
                date: selectedTransaction.date
                    ? new Date(selectedTransaction.date)
                        .toISOString().slice(0, 10)
                    : new Date().toISOString().slice(0, 10),
                description: selectedTransaction.description || ""
            });

        } else {

            setFormData({
                title: "",
                amount: "",
                type: "income",
                category: "",
                date: new Date().toISOString().slice(0, 10),
                description: ""
            });

        }

    }, [selectedTransaction]);

    // STEP 2: Handle input changes
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };

    // STEP 3: Submit form
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            !formData.title.trim() ||
            !formData.category.trim() ||
            !formData.amount ||
            Number(formData.amount) <= 0
        ) {

            alert("Please enter valid transaction details");
            return;

        }

        const success = await onAdd({
            ...formData,
            amount: Number(formData.amount)
        });

        // Clear form only if saving succeeds
        if (success) {

            setFormData({
                title: "",
                amount: "",
                type: "income",
                category: "",
                date: new Date().toISOString().slice(0, 10),
                description: ""
            });

        }

    };

    // STEP 4: Cancel editing
    const handleCancel = () => {

        setFormData({
            title: "",
            amount: "",
            type: "income",
            category: "",
            date: new Date().toISOString().slice(0, 10),
            description: ""
        });

        if (onCancel) {
            onCancel();
        }

    };

    return (

        <div className="card p-4 shadow-sm">

            <h4>
                {editingId ? "Edit Transaction" : "Add Transaction"}
            </h4>

            <form onSubmit={handleSubmit}>

                <input
                    className="form-control mb-3"
                    name="title"
                    placeholder="Transaction Title"
                    value={formData.title}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    min="0.01"
                    step="0.01"
                    value={formData.amount}
                    onChange={handleChange}
                />

                <select
                    className="form-select mb-3"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                <input
                    className="form-control mb-3"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />

                <textarea
                    className="form-control mb-3"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                >
                    {editingId ? "Update Transaction" : "Add Transaction"}
                </button>

                {editingId && (

                    <button
                        type="button"
                        className="btn btn-secondary w-100 mt-2"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>

                )}

            </form>

        </div>

    );

}

export default TransactionForm;
