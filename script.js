// 1. Always get the most recent data
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const form = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const submitBtn = document.getElementById("submit-btn");

if (form) {
    // Check storage specifically for this page load
    let editIndex = localStorage.getItem("editIndex");

    if (editIndex !== null && expenses[editIndex]) {
        // Only change text if the button actually exists in the HTML
        if (submitBtn) submitBtn.textContent = "Update Expense";

        document.getElementById("title").value = expenses[editIndex].title;
        document.getElementById("amount").value = expenses[editIndex].amount;
        document.getElementById("category").value = expenses[editIndex].category;
        document.getElementById("datee").value = expenses[editIndex].day;
    } else {
        // Safety: remove invalid editIndex
        localStorage.removeItem("editIndex");
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const amount = document.getElementById("amount").value;
        const category = document.getElementById("category").value;
        const day = document.getElementById("datee").value;
        
        const updatedExpense = { title, amount, category, day };

        let currentEdit = localStorage.getItem("editIndex");

        if (currentEdit !== null && expenses[currentEdit]) {
            expenses[currentEdit] = updatedExpense;
            //localStorage.removeItem("editIndex");
            alert("Expense updated successfully!");
        } else {
            expenses.push(updatedExpense);
            alert("Expense added successfully!");
        }

        localStorage.setItem("expenses", JSON.stringify(expenses));
        form.reset();

        // Redirect to view page
       // window.location.href = "view.html";
    });
}

function displayExpenses() {
    if (expenseList) {
        expenseList.innerHTML = "";
        expenses.forEach((exp, index) => {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.textContent = `${exp.title} - $${exp.amount} (${exp.category}) on ${exp.day}`;
            li.appendChild(span);

            const dltBtn = document.createElement("button");
            dltBtn.textContent = "Delete";
            dltBtn.onclick = function () {
                expenses.splice(index, 1);
                localStorage.setItem("expenses", JSON.stringify(expenses));
                displayExpenses();
            };

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.onclick = function () {
                localStorage.setItem("editIndex", index);
                window.location.href = "index.html";
            };

            li.appendChild(editBtn);
            li.appendChild(dltBtn);
            expenseList.appendChild(li);
        });
    }
}

displayExpenses();