import React from "react";
import "./ExpenseDetails.css";
function ExpenseDetails({ incomeAmt, expenseAmt }) {
  return (
    <div>
      <div className="Balance-amount">
        Your Balance is ₹ {incomeAmt - expenseAmt}
      </div>
      {/* Show Income & Expense amount */}
      <div className="amounts-container">
        Income:
        <span className="income-amount">₹{incomeAmt}</span>
        Expense:
        <span className="expense-amount">₹{expenseAmt}</span>
      </div>
    </div>
  );
}

export default ExpenseDetails;
