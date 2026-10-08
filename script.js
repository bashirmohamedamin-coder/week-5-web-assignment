// SpendWise budget data
let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

monthlyBudget = Number(prompt("Enter your monthly budget:"));

totalExpenses = Number(prompt("Enter your total expenses:"));

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);

function checkBudgetStatus(balance) {
    if (balance >= 0) {
        return "You are within your budget.";
    } else {
        return "You have exceeded your budget.";
    }
}

console.log("===== SpendWise Budget Summary =====");
console.log("Monthly Budget: KES " + monthlyBudget);
console.log("Total Expenses: KES " + totalExpenses);
console.log("Remaining Balance: KES " + remainingBalance);
console.log("Budget Status: " + checkBudgetStatus(remainingBalance));