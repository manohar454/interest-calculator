function calculateInterest() {
  const borrower = document.getElementById("borrower").value;
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const start = new Date(document.getElementById("startDate").value);
  const end = new Date(document.getElementById("endDate").value);

  if (!borrower || !principal || !rate || !start || !end) {
    alert("Please fill all fields");
    return;
  }

  const days = Math.floor((end - start) / (1000 * 60 * 60 * 24));
  const months = days / 30;

  const SI = (principal * rate * months) / 100;
  const total = principal + SI;

  const data = {
    borrower,
    principal,
    rate,
    days,
    months: months.toFixed(2),
    SI,
    total,
    date: new Date().toLocaleDateString("en-GB")
  };

  localStorage.setItem("statementData", JSON.stringify(data));
  window.location.href = "statement.html";
}
