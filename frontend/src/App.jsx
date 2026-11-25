
import { useState, useEffect } from "react";
import axios from "axios";

import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import ExpenseChart from "./components/ExpenseChart";

const API = "http://localhost:5000/api/transactions";

function App() {

    const [transactions, setTransactions] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    // GET TRANSACTIONS
    const fetchTransactions = async () => {
        try {
            const response = await axios.get(API);
            setTransactions(response.data);
        } catch (error) {
            console.log("Fetch error:", error);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    // ADD OR UPDATE TRANSACTION
   
const handleAdd = async (data) => {

    try {

        if (editingId) {

            // UPDATE existing transaction
            await axios.put(`${API}/${editingId}`, data);

            alert("Transaction updated successfully");

        } else {

            // ADD new transaction
            await axios.post(API, data);

            alert("Transaction added successfully");

        }

        setEditingId(null);
        setSelectedTransaction(null);

        await fetchTransactions();

        return true;

    } catch (error) {

        console.log("Save error:", error);

        alert(
            error.response?.data?.message ||
            "Unable to save transaction"
        );

        return false;

    }

};


    // DELETE TRANSACTION
    const handleDelete = async (id) => {

        if (!window.confirm("Are you sure you want to delete?")) {
            return;
        }

        try {
            await axios.delete(`${API}/${id}`);
            fetchTransactions();
        } catch (error) {
            console.log("Delete error:", error);
        }
    };

    // EDIT TRANSACTION
    const handleEdit = (item) => {

        setEditingId(item._id);
        setSelectedTransaction(item);
        window.dispatchEvent(
            new CustomEvent("editTransaction", {
                detail: item
            })
        );
    };

    return (
        <div className="container py-4">

            <h2 className="text-center mb-4">
                Expense Tracker
            </h2>

            <Summary transactions={transactions} />

            <TransactionForm
              key={editingId || "new"}
              onAdd={handleAdd}
              editingId={editingId}
              selectedTransaction={selectedTransaction}
              onCancel={() => {
              setEditingId(null);
              setSelectedTransaction(null);
          }}
            />
            <TransactionList
                transactions={transactions}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />

            <ExpenseChart transactions={transactions} />

        </div>
    );
}

export default App;
