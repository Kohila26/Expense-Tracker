
function Summary({ transactions }) {

    const totalIncome = transactions
        .filter(item => item.type === "income")
        .reduce((total, item) => total + Number(item.amount), 0);

    const totalExpense = transactions
        .filter(item => item.type === "expense")
        .reduce((total, item) => total + Number(item.amount), 0);

    const balance = totalIncome - totalExpense;

    return (
        <div className="row mb-4">

            <div className="col-md-4 mb-3">
                <div className="card p-3 bg-success text-white">
                    <h5>Total Income</h5>
                    <h3>₹{totalIncome.toFixed(2)}</h3>
                </div>
            </div>

            <div className="col-md-4 mb-3">
                <div className="card p-3 bg-danger text-white">
                    <h5>Total Expense</h5>
                    <h3>₹{totalExpense.toFixed(2)}</h3>
                </div>
            </div>

            <div className="col-md-4 mb-3">
                <div className="card p-3 bg-primary text-white">
                    <h5>Total Balance</h5>
                    <h3>₹{balance.toFixed(2)}</h3>
                </div>
            </div>

        </div>
    );
}

export default Summary;
