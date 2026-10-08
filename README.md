# SpendWise

SpendWise is a simple personal budgeting application designed to help users understand their budget and expenses. The project started as a visual dashboard and has now been enhanced with JavaScript to process user input, perform calculations, and display budgeting results.

## Project Files

* `index.html` - Contains the structure of the SpendWise application.
* `style.css` - Provides the styling and visual design.
* `script.js` - Contains the JavaScript logic for collecting input, performing calculations, and displaying results.
* `README.md` - Provides information about the project.

## JavaScript Concepts Implemented

The SpendWise project demonstrates several JavaScript concepts covered in this week's lessons:

* Variables
* Data types
* User input
* Number conversion
* Arithmetic calculations
* Functions
* Conditional statements
* Browser console output

## Variables

Variables are used to store important budgeting information.

For example:

```javascript
let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;
```

`monthlyBudget` stores the user's available budget, `totalExpenses` stores the total amount spent, and `remainingBalance` stores the amount left after expenses.

## User Input

The application uses the JavaScript `prompt()` function to collect information from the user.

```javascript
monthlyBudget = Number(prompt("Enter your monthly budget:"));
totalExpenses = Number(prompt("Enter your total expenses:"));
```

The `Number()` function converts the user's input into a number so that it can be used in mathematical calculations.

## Budget Calculations

SpendWise calculates the remaining balance by subtracting total expenses from the monthly budget.

```javascript
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}
```

For example, if the budget is KES 50,000 and expenses are KES 32,000:

```text
20,000 - 10,000 = 10,000
```

The remaining balance is therefore KES 18,000.

## Functions

Functions help organize the JavaScript code and make the logic reusable.

The `calculateRemainingBalance()` function calculates the money remaining after expenses.

The `checkBudgetStatus()` function checks whether the user is within their budget or has exceeded it.

```javascript
function checkBudgetStatus(balance) {
    if (balance >= 0) {
        return "You are within your budget.";
    } else {
        return "You have exceeded your budget.";
    }
}
```

Using functions makes the application easier to understand, maintain, and expand.

## Displaying Results

The calculated information is displayed in the browser console using `console.log()`.

The application displays:

* Monthly budget
* Total expenses
* Remaining balance
* Budget status

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a web browser.
4. Enter the requested budget and expense information when prompted.
5. Open the browser Developer Tools and select the Console tab.
6. View the SpendWise budget summary.

## Conclusion

The JavaScript foundation makes SpendWise more interactive by allowing it to receive user data, process budget information, perform calculations, and display useful results. The project can be expanded in the future with features such as adding individual expenses, tracking expense categories, and displaying budget information directly on the dashboard.
