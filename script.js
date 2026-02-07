
const form = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");


form.addEventListener("submit", function (event) {
  event.preventDefault(); // page reload stop

 
  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;


  const li = document.createElement("li");
  li.textContent = `${title} - $${amount} (${category})`;

  expenseList.appendChild(li);

  form.reset();
});
