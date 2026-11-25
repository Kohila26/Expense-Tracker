# Expense-Tracker
# MERN Stack Expense Tracker

A full-stack **Expense Tracker application** built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This application helps users manage their income and expenses, track their balance, and view financial summaries.

## Features

- Add new income and expense transactions.
- View all transactions.
- Edit existing transactions.
- Delete transactions.
- Calculate total income.
- Calculate total expenses.
- Display the available balance.
- Categorize transactions.
- View monthly income and expense charts.
- Store transaction data in MongoDB.
- Responsive user interface using Bootstrap.

## Technologies Used

### Frontend
- React.js
- JavaScript
- Bootstrap
- Axios
- Recharts
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## Project Structure

```text
Expense-Tracker/
│
├── backend/
│   ├── config/
│   ├── models/
│   │   └── Transaction.js
│   ├── routes/
│   │   └── transactionRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Summary.jsx
│   │   │   ├── TransactionForm.jsx
│   │   │   ├── TransactionList.jsx
│   │   │   └── ExpenseChart.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd Expense-Tracker
```

### 3. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

The backend runs at:

```text
http://localhost:5000
```

### 4. Frontend Setup

Open another terminal:

```bash
cd Expense-Tracker/frontend
npm install
```

Start the React application:

```bash
npm run dev
```

Open the local URL displayed in your terminal (usually `http://localhost:5173`).

## API Endpoints

Base URL: `http://localhost:5000/api/transactions`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/` | Add a transaction |
| GET | `/` | Get all transactions |
| PUT | `/:id` | Update a transaction |
| DELETE | `/:id` | Delete a transaction |

## Application Workflow

1. Enter transaction details such as title, amount, type, category, and date.
2. Add the transaction.
3. View the transaction in the transaction list.
4. Edit or delete transactions when needed.
5. View total income, total expenses, and available balance.
6. Analyze monthly financial data using charts.

## Environment Variables

Keep your MongoDB connection string inside `backend/.env`.

**Important:** Never upload your `.env` file or MongoDB credentials to GitHub.

## Future Enhancements

- User registration and login.
- JWT authentication.
- Search and filter transactions.
- Pagination.
- Export financial reports to PDF or Excel.
- Budget management.
- Dashboard improvements.

## Author

Developed as a MERN Stack practice project.

## License

This project is created for learning and educational purposes.