function calculateInterest() {
  const borrower = document.getElementById("borrower").value;
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  if (!borrower || isNaN(principal) || isNaN(rate) || !startDate || !endDate) {
    alert("Please fill all fields correctly");
    return;
  }

  const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
  if (days <= 0) {
    alert("End date must be after start date");
    return;
  }

  const months = days / 30;
  const interest = (principal * rate * months) / 100;
  const total = principal + interest;

  document.getElementById("result").innerHTML = `
    <h3>Interest Statement</h3>
    <p><strong>Borrower:</strong> ${borrower}</p>
    <p><strong>Duration:</strong> ${months.toFixed(2)} months</p>
    <p><strong>Interest:</strong> ₹${interest.toFixed(2)}</p>
    <p><strong>Total Amount:</strong> ₹${total.toFixed(2)}</p>
  `;
}

function clearForm() {
  document.querySelectorAll("input").forEach(input => input.value = "");
  document.getElementById("result").innerHTML = "";
}
