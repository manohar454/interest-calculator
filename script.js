function calculate() {
  const borrower = document.getElementById("borrower").value.trim();
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  if (!borrower || !principal || !rate || !startDate || !endDate) {
    alert("Please fill all fields correctly");
    return;
  }

  const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const months = days / 30;

  const interest = (principal * rate * months) / 100;
  const total = principal + interest;

  const data = {
    borrower,
    principal,
    rate,
    startDate: startDate.toDateString(),
    endDate: endDate.toDateString(),
    months: months.toFixed(2),
    interest: interest.toFixed(2),
    total: total.toFixed(2)
  };

  localStorage.setItem("interestData", JSON.stringify(data));
  window.location.href = "result.html";
}

function loadStatement() {
  const data = JSON.parse(localStorage.getItem("interestData"));
  if (!data) return;

  document.getElementById("statement").innerHTML = `
    <p><strong>Borrower Name:</strong> ${data.borrower}</p>
    <p><strong>Principal:</strong> ₹${data.principal}</p>
    <p><strong>Interest Rate:</strong> ₹${data.rate} per 100 per month</p>
    <p><strong>Period:</strong> ${data.months} months</p>
    <p><strong>Interest Amount:</strong> ₹${data.interest}</p>
    <hr />
    <h2>Total Payable: ₹${data.total}</h2>
  `;
}

function goBack() {
  window.location.href = "index.html";
}

function clearForm() {
  document.querySelectorAll("input").forEach(i => i.value = "");
}

if (window.location.pathname.includes("result.html")) {
  loadStatement();
}
