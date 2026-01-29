function calculateInterest() {
  const name = document.getElementById("borrower").value.trim();
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  if (!name || isNaN(principal) || isNaN(rate) || !startDate || !endDate) {
    alert("Please fill all fields correctly");
    return;
  }

  if (endDate <= startDate) {
    alert("End date must be after start date");
    return;
  }

  const diffTime = endDate - startDate;
  const days = diffTime / (1000 * 60 * 60 * 24);
  const months = days / 30;

  const interest = (principal * rate * months) / 100;
  const total = principal + interest;

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("result").innerHTML = `
    <strong>${name}</strong><br>
    Duration: ${months.toFixed(2)} months<br>
    Interest: ₹${interest.toFixed(2)}<br>
    <strong>Total Amount: ₹${total.toFixed(2)}</strong>
  `;
}

function clearForm() {
  document.querySelectorAll("input").forEach(input => input.value = "");
  document.getElementById("result").classList.add("hidden");
}

