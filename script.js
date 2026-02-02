// Form ni select cheyyadam
const form = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

// Form submit event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // page reload stop

  // Input values techukuntunnam
  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  // New list item create cheyyadam
  const li = document.createElement("li");
  li.textContent = `${title} - $${amount} (${category})`;

  // List lo add cheyyadam
  expenseList.appendChild(li);

  // Form clear cheyyadam
  form.reset();
});
